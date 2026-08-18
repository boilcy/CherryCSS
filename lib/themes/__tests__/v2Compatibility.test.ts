import fs from 'node:fs'
import path from 'node:path'
import postcss, { type Rule } from 'postcss'
import { describe, expect, it } from 'vitest'
import { GET as getThemeCss } from '../../../app/api/themes/[id]/css/route'
import { scopeThemeCssForPreview } from '../../cssTransformer'
import { starryNight } from '../others/starryNight'
import { origin_themes, themes } from '../index'
import { compileThemeCssV2, THEME_V2_PROFILES, V2_SEMANTIC_TOKENS } from '../v2Compatibility'

type Mode = 'light' | 'dark'

function modeDeclarations(css: string, mode: Mode): Map<string, string> {
  const declarations = new Map<string, string>()
  postcss.parse(css).walkRules((rule) => {
    if (rule.selector !== `html.${mode}, body.${mode}`) return
    rule.walkDecls((declaration) => {
      declarations.set(declaration.prop, declaration.value)
    })
  })
  return declarations
}

function resolveValue(
  declarations: Map<string, string>,
  property: string,
  seen = new Set<string>()
): string | undefined {
  if (seen.has(property)) throw new Error(`Circular test variable ${property}`)
  const value = declarations.get(property)
  if (!value) return undefined
  const nextSeen = new Set(seen).add(property)
  return value.replace(/var\(\s*(--[A-Za-z0-9_-]+)(?:\s*,[^)]*)?\s*\)/g, (match, dependency) => {
    return resolveValue(declarations, dependency, nextSeen) || match
  })
}

function canonical(declarations: Map<string, string>, name: string): string | undefined {
  return resolveValue(declarations, `--${name}`)
}

function rgb(value: string): [number, number, number] | undefined {
  const hex = value.match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i)?.[1]
  if (hex) {
    if (hex.length === 8 && Number.parseInt(hex.slice(6, 8), 16) < 255) return undefined
    const expanded = hex.length === 3 ? [...hex].map((part) => part.repeat(2)).join('') : hex
    return [
      Number.parseInt(expanded.slice(0, 2), 16),
      Number.parseInt(expanded.slice(2, 4), 16),
      Number.parseInt(expanded.slice(4, 6), 16),
    ]
  }
  const match = value.match(
    /^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:\s*[,/]\s*([\d.]+)(%)?)?\s*\)$/i
  )
  if (match?.[4] && Number(match[4]) < (match[5] ? 100 : 1)) return undefined
  return match ? [Number(match[1]), Number(match[2]), Number(match[3])] : undefined
}

function luminance(color: [number, number, number]): number {
  const [red, green, blue] = color.map((channel) => {
    const normalized = channel / 255
    return normalized <= 0.04045 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4
  })
  return red * 0.2126 + green * 0.7152 + blue * 0.0722
}

function contrast(left: [number, number, number], right: [number, number, number]): number {
  const values = [luminance(left), luminance(right)].sort((a, b) => b - a)
  return (values[0] + 0.05) / (values[1] + 0.05)
}

describe('CherryCSS v2 compiler contract', () => {
  it('compiles exactly the 36 unique registered legacy themes', () => {
    expect(origin_themes).toHaveLength(36)
    expect(themes).toHaveLength(36)
    expect(new Set(origin_themes.map((theme) => theme.id)).size).toBe(36)
    expect(themes.map((theme) => theme.id)).toEqual(origin_themes.map((theme) => theme.id))
  })

  it('serves the exact compiled export bytes from the CSS API', async () => {
    const changAn = themes.find((theme) => theme.id === 'chang-an')!
    const response = await getThemeCss(new Request('http://localhost/api/themes/chang-an/css'), {
      params: { id: 'chang-an' },
    })
    expect(response.headers.get('content-type')).toBe('text/css; charset=utf-8')
    expect(await response.text()).toBe(changAn.css)
  })

  it('fails closed with the theme id for malformed, unknown-mode, and non-color inputs', () => {
    expect(() => compileThemeCssV2({ id: 'broken-css', css: ':root {' })).toThrow(
      /CherryCSS v2:broken-css/
    )
    expect(() =>
      compileThemeCssV2({
        id: 'unknown-mode',
        css: 'body[theme-mode="sepia"] { --color-background: white; }',
      })
    ).toThrow(/CherryCSS v2:unknown-mode/)
    expect(() =>
      compileThemeCssV2({
        id: 'gradient-surface',
        css: ':root { --color-background: linear-gradient(white, black); }',
      })
    ).toThrow(/CherryCSS v2:gradient-surface/)
  })

  it.each(themes)(
    '$id exports only canonical mode roots and allowlisted semantic rules',
    (theme) => {
      const root = postcss.parse(theme.css)
      const selectors = root.nodes
        .filter((node): node is Rule => node.type === 'rule')
        .flatMap((rule) => rule.selectors)
      expect(selectors).toContain('html.light')
      expect(selectors).toContain('body.light')
      expect(selectors).toContain('html.dark')
      expect(selectors).toContain('body.dark')

      expect(theme.css).not.toMatch(/cherry-studio:custom-css:v1/)
      expect(theme.css).not.toMatch(/theme-mode|!\s*important|\.ant-|\[class/)
      expect(theme.css).not.toMatch(
        /\.(?:bubble|message-content-container|system-prompt|inputbar)\b/
      )
      expect(theme.css).not.toMatch(
        /var\(\s*--(?:color-|chat-background|navbar-background|cs-|app-)/
      )

      root.walkDecls((declaration) => {
        expect(declaration.prop).not.toMatch(
          /^--(?:color-|chat-background|navbar-background|cs-|app-)/
        )
        expect(declaration.important).toBeFalsy()
      })

      for (const mode of ['light', 'dark'] as const) {
        const declarations = modeDeclarations(theme.css, mode)
        for (const value of declarations.values()) {
          for (const match of value.matchAll(/var\(\s*(--cherrycss-[A-Za-z0-9_-]+)/g)) {
            expect(
              declarations.has(match[1]),
              `${theme.id} ${mode} has unresolved ${match[1]}`
            ).toBe(true)
          }
        }
      }

      root.walkRules((rule) => {
        if (/^html\.(?:light|dark), body\.(?:light|dark)$/.test(rule.selector)) return
        expect(rule.selector).not.toContain('#')
        for (const selector of rule.selectors) {
          const match = selector
            .trim()
            .match(/^\[data-ui~='([^']+)'\](?::(?:hover|focus-within))?$/)
          expect(match, `unsafe selector in ${theme.id}: ${selector}`).not.toBeNull()
          expect(V2_SEMANTIC_TOKENS).toContain(match?.[1])
        }
      })
    }
  )

  it.each(themes)('$id emits every canonical surface with its foreground partner', (theme) => {
    for (const mode of ['light', 'dark'] as const) {
      const declarations = modeDeclarations(theme.css, mode)
      const pairs = [
        ['--card', '--card-foreground'],
        ['--popover', '--popover-foreground'],
        ['--primary', '--primary-foreground'],
        ['--secondary', '--secondary-foreground'],
        ['--muted', '--muted-foreground'],
        ['--accent', '--accent-foreground'],
        ['--sidebar', '--sidebar-foreground'],
        ['--sidebar-primary', '--sidebar-primary-foreground'],
        ['--sidebar-accent', '--sidebar-accent-foreground'],
      ]
      for (const [surface, foreground] of pairs) {
        if (declarations.has(surface)) expect(declarations.has(foreground)).toBe(true)
      }
    }
  })

  it('preserves representative light and dark palette values', () => {
    const byId = new Map(themes.map((theme) => [theme.id, theme]))

    const changAnLight = modeDeclarations(byId.get('chang-an')!.css, 'light')
    const changAnDark = modeDeclarations(byId.get('chang-an')!.css, 'dark')
    expect(canonical(changAnLight, 'background')).toBe('#F2E6D5')
    expect(canonical(changAnDark, 'background')).toBe('#2C2420')
    expect(canonical(changAnLight, 'chat-user')).toBe('#F2E6D5')
    expect(canonical(changAnDark, 'chat-user')).toBe('#362D26')
    expect(canonical(changAnLight, 'primary')).toBe('#9E2B25')
    expect(canonical(changAnDark, 'primary')).toBe('#9E2B25')

    const draculaLight = modeDeclarations(byId.get('dracula')!.css, 'light')
    const draculaDark = modeDeclarations(byId.get('dracula')!.css, 'dark')
    expect([...draculaLight]).toEqual([...draculaDark])

    const suXuanLight = modeDeclarations(byId.get('su-xuan')!.css, 'light')
    const suXuanDark = modeDeclarations(byId.get('su-xuan')!.css, 'dark')
    expect(canonical(suXuanLight, 'background')).toBe('#FCF9F5')
    expect(canonical(suXuanDark, 'background')).toBe('#1F2428')
    for (const missing of ['--foreground', '--primary', '--border']) {
      expect(suXuanLight.has(missing)).toBe(false)
      expect(suXuanDark.has(missing)).toBe(false)
    }

    const peppaLight = modeDeclarations(byId.get('peppa')!.css, 'light')
    const peppaDark = modeDeclarations(byId.get('peppa')!.css, 'dark')
    expect(canonical(peppaLight, 'background')).toBe('#d9e2f5')
    expect(canonical(peppaDark, 'background')).toBe('#42586e')
    expect(canonical(peppaLight, 'chat-user')).not.toBe(canonical(peppaDark, 'chat-user'))

    const pulseLight = modeDeclarations(byId.get('pulse-interactive')!.css, 'light')
    const pulseDark = modeDeclarations(byId.get('pulse-interactive')!.css, 'dark')
    expect(canonical(pulseLight, 'background')).toBe('#f3f3f3')
    expect(canonical(pulseDark, 'background')).toBe('#242424')
    expect(canonical(pulseLight, 'chat-user')).toBe('#5698c3')
    expect(canonical(pulseDark, 'chat-user')).toBe('#2b73af')

    const gladiiaLight = modeDeclarations(byId.get('gladiia')!.css, 'light')
    expect(gladiiaLight.has('--background')).toBe(false)
    expect(gladiiaLight.has('--primary')).toBe(true)
    expect(gladiiaLight.has('--border')).toBe(true)
  })

  it('compiles the inactive starry-night profile without registering it', () => {
    expect(origin_themes.some((theme) => theme.id === 'starry-night')).toBe(false)
    expect(THEME_V2_PROFILES['starry-night']).toBeDefined()
    const css = compileThemeCssV2(starryNight)
    const light = modeDeclarations(css, 'light')
    const dark = modeDeclarations(css, 'dark')
    expect(canonical(light, 'background')).toBe('oklch(97% 0.005 260)')
    expect(canonical(dark, 'background')).toBe('oklch(25% 0.01 260)')
    expect(canonical(light, 'background')).not.toContain('gradient')
    expect(canonical(dark, 'background')).not.toContain('gradient')
    expect(css).toContain("[data-ui~='app.window']")
  })

  it('selects resolvable WCAG text pairs for solid primary colors', () => {
    const reviewedPairs: string[] = []
    for (const theme of themes) {
      for (const mode of ['light', 'dark'] as const) {
        const declarations = modeDeclarations(theme.css, mode)
        const primaryValue = canonical(declarations, 'primary')
        const foregroundValue = canonical(declarations, 'primary-foreground')
        if (!primaryValue || !foregroundValue) continue
        const primary = rgb(primaryValue)
        const foreground = rgb(foregroundValue)
        expect(primary, `${theme.id} ${mode} primary`).toBeDefined()
        expect(foreground, `${theme.id} ${mode} primary foreground`).toBeDefined()
        if (contrast(primary!, foreground!) >= 4.5) continue
        const review = THEME_V2_PROFILES[theme.id]?.contrastReview
        expect(review, `${theme.id} ${mode} requires an explicit profile review`).toBeDefined()
        expect(review === true || review?.includes(mode), `${theme.id} ${mode} review`).toBe(true)
        reviewedPairs.push(`${theme.id}:${mode}`)
      }
    }
    expect(reviewedPairs).toEqual([
      'chun-mei:light',
      'chun-mei:dark',
      'liu-yun:light',
      'liu-yun:dark',
      'qing-wu:light',
      'qing-wu:dark',
      'ru-yao-lan:light',
      'ru-yao-lan:dark',
      'ru-yao-lv:light',
      'ru-yao-lv:dark',
      'tian-shui:light',
      'tian-shui:dark',
      'yang-pi-zhi:light',
      'yang-pi-zhi:dark',
      'yan-yu:light',
      'yan-yu:dark',
      'yan-zhi:light',
      'yan-zhi:dark',
      'yao-huo:light',
      'yao-huo:dark',
      'yu-shi:light',
      'yu-shi:dark',
      'gladiia:light',
      'gladiia:dark',
      'mo-nai:light',
      'mo-nai:dark',
      'nai-cha:light',
      'nai-cha:dark',
      'mu-shan-zi:light',
      'mu-shan-zi:dark',
      'pulse-interactive:light',
    ])
  })

  it('scopes mode roots and semantic rules while preserving keyframes', () => {
    const scoped = scopeThemeCssForPreview(
      `html.light, body.light { --background: white; }
       html.dark, body.dark { --background: black; }
       [data-ui~='app.window'] { font-family: system-ui; }
       [data-ui~='chat.composer']:focus-within, [data-ui~='part:composer-input'] { color: red; }
       @keyframes pulse { from { opacity: 0; } to { opacity: 1; } }`,
      'preview-test'
    )
    expect(scoped).toContain('.preview-test.light')
    expect(scoped).toContain('.preview-test.dark')
    expect(scoped).toContain(".preview-test[data-ui~='app.window']")
    expect(scoped).toContain(".preview-test [data-ui~='chat.composer']:focus-within")
    expect(scoped).toContain(".preview-test [data-ui~='part:composer-input']")
    expect(scoped).toContain('from { opacity: 0; }')
    expect(scoped).not.toContain('.preview-test from')
  })

  it('keeps the preview source free of retired v1 DOM and variable contracts', () => {
    const renderDirectory = path.resolve(process.cwd(), 'components/render')
    const files = fs
      .readdirSync(renderDirectory, { recursive: true })
      .filter((file): file is string => typeof file === 'string' && file.endsWith('.tsx'))
    const source = files
      .map((file) => fs.readFileSync(path.join(renderDirectory, file), 'utf8'))
      .join('\n')
    expect(source).not.toMatch(
      /theme-mode|--(?:color-|chat-background|navbar-background)|\bant-|\brc-|#(?:content-container|chat-main|messages|inputbar)/
    )
  })
})
