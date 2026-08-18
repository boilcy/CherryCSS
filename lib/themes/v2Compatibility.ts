import type { Theme } from '@/lib/types'
import postcss, { type Root, type Rule } from 'postcss'

type Mode = 'light' | 'dark'
type SourceMap = Map<string, string>

type CanonicalName =
  | 'background'
  | 'foreground'
  | 'card'
  | 'primary'
  | 'secondary'
  | 'muted'
  | 'muted-foreground'
  | 'accent'
  | 'border'
  | 'input'
  | 'sidebar'
  | 'sidebar-accent'
  | 'background-subtle'
  | 'foreground-tertiary'
  | 'border-subtle'
  | 'border-strong'
  | 'error'
  | 'link'
  | 'code-block'
  | 'reference'
  | 'reference-foreground'
  | 'reference-subtle'
  | 'chat-user'

type SemanticState = 'hover' | 'focus-within'

interface SemanticRule {
  tokens: readonly V2SemanticToken[]
  state?: SemanticState
  declarations: Readonly<Partial<Record<SafeSemanticProperty, string>>>
}

interface ThemeV2Profile {
  sources?: Partial<
    Record<CanonicalName, readonly string[] | Partial<Record<Mode, readonly string[]>>>
  >
  primaryForeground?: string | Partial<Record<Mode, string>>
  contrastReview?: true | readonly Mode[]
  rules?: readonly SemanticRule[]
}

export const V2_SEMANTIC_TOKENS = [
  'app.window',
  'app.sidebar',
  'app.content',
  'app.tab-bar',
  'chat.view',
  'chat.message-list',
  'chat.message',
  'chat.message.group',
  'chat.composer',
  'chat.topic-list',
  'part:conversation-main',
  'part:message-content',
  'part:message-reasoning',
  'part:message-actions',
  'part:code-block',
  'part:composer-input',
  'part:composer-actions',
] as const

export type V2SemanticToken = (typeof V2_SEMANTIC_TOKENS)[number]

const SAFE_SEMANTIC_PROPERTIES = [
  'background',
  'background-color',
  'background-image',
  'background-position',
  'background-repeat',
  'background-size',
  'backdrop-filter',
  'border',
  'border-radius',
  'box-shadow',
  'color',
  'font-family',
  'font-feature-settings',
  'letter-spacing',
  'line-height',
  'margin',
  'padding',
  'transition',
] as const

type SafeSemanticProperty = (typeof SAFE_SEMANTIC_PROPERTIES)[number]

const DEFAULT_SOURCES: Readonly<Record<CanonicalName, readonly string[]>> = {
  background: ['--color-background', '--chat-background'],
  foreground: ['--color-text', '--color-text-1'],
  card: ['--chat-background-assistant', '--color-background-soft', '--color-background'],
  primary: ['--color-primary'],
  secondary: ['--color-background-soft'],
  muted: ['--color-background-mute', '--color-background-soft'],
  'muted-foreground': ['--color-text-2', '--color-text', '--color-text-1'],
  accent: ['--color-hover', '--color-background-soft'],
  border: ['--color-border'],
  input: ['--color-border'],
  sidebar: ['--navbar-background'],
  'sidebar-accent': ['--color-active', '--color-hover'],
  'background-subtle': ['--color-background-mute', '--color-background-soft'],
  'foreground-tertiary': ['--color-text-3', '--color-text-2'],
  'border-subtle': ['--color-border-soft', '--color-border'],
  'border-strong': ['--color-border'],
  error: ['--color-error'],
  link: ['--color-link'],
  'code-block': ['--color-code-background'],
  reference: ['--color-reference'],
  'reference-foreground': ['--color-reference-text'],
  'reference-subtle': ['--color-reference-background'],
  'chat-user': ['--chat-background-user'],
}

const PROFILE_SOURCE = (source: string): readonly string[] => [source]

export const THEME_V2_PROFILES: Readonly<Record<string, ThemeV2Profile>> = {
  'su-xuan': {},
  'chun-mei': { contrastReview: true },
  'liu-yun': { contrastReview: true },
  'qing-wu': { contrastReview: true },
  'ru-yao-lan': { contrastReview: true },
  'ru-yao-lv': { contrastReview: true },
  'tian-shui': { contrastReview: true },
  'yang-pi-zhi': { contrastReview: true },
  'yan-yu': { contrastReview: true },
  'yan-zhi': { contrastReview: true },
  'yao-huo': { contrastReview: true },
  'yu-shi': { contrastReview: true },
  'mo-nai': { contrastReview: true },
  'nai-cha': { contrastReview: true },
  'mu-shan-zi': { contrastReview: true },
  gladiia: {
    contrastReview: true,
    rules: [
      {
        tokens: ['part:message-content'],
        declarations: {
          background: 'var(--card, var(--background))',
          border: '1px solid var(--border)',
          'border-radius': '18px',
          'box-shadow': '0 4px 16px -8px rgb(0 0 0 / 20%)',
          margin: '8px 0',
          padding: '10px',
          transition: 'transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)',
        },
      },
      {
        tokens: ['chat.composer'],
        declarations: {
          'backdrop-filter': 'blur(8px)',
          border: '1px solid var(--border)',
          'border-radius': '20px',
          'box-shadow': '0 8px 32px -12px rgb(0 0 0 / 20%)',
        },
      },
    ],
  },
  peppa: {
    sources: {
      background: PROFILE_SOURCE('--display-4'),
      foreground: PROFILE_SOURCE('--stroke-black'),
      card: PROFILE_SOURCE('--chat-background-assistant'),
      primary: PROFILE_SOURCE('--pig-accent'),
      border: PROFILE_SOURCE('--stroke-black'),
      input: PROFILE_SOURCE('--stroke-black'),
      sidebar: PROFILE_SOURCE('--navbar-background'),
      'chat-user': PROFILE_SOURCE('--chat-background-user'),
    },
    rules: [
      {
        tokens: ['part:message-content', 'chat.composer', 'chat.topic-list'],
        declarations: {
          border: '2px solid var(--border)',
          'border-radius': '16px',
          'box-shadow': '0 4px 0 var(--border)',
        },
      },
      {
        tokens: ['part:message-content'],
        state: 'hover',
        declarations: {
          transition: 'transform 0.2s ease',
        },
      },
    ],
  },
  'starry-night': {
    primaryForeground: '--text-on-brand',
    sources: {
      background: PROFILE_SOURCE('--color-background-base'),
      foreground: PROFILE_SOURCE('--text-primary'),
      card: PROFILE_SOURCE('--bg-element-soft'),
      primary: PROFILE_SOURCE('--color-brand-primary'),
      secondary: PROFILE_SOURCE('--bg-element-soft'),
      muted: PROFILE_SOURCE('--bg-element-mute'),
      accent: PROFILE_SOURCE('--bg-element-primary'),
      border: PROFILE_SOURCE('--border-color'),
      input: PROFILE_SOURCE('--border-color'),
      sidebar: PROFILE_SOURCE('--bg-element-soft'),
      'sidebar-accent': PROFILE_SOURCE('--bg-element-primary'),
      'background-subtle': PROFILE_SOURCE('--bg-element-mute'),
      'border-subtle': PROFILE_SOURCE('--border-color'),
      'border-strong': PROFILE_SOURCE('--border-hover-color'),
      'chat-user': PROFILE_SOURCE('--bg-element-primary'),
    },
    rules: [
      {
        tokens: ['app.window'],
        declarations: {
          'background-image': 'var(--cherrycss-starry-night-background-image-url)',
          'background-position': 'center',
          'background-repeat': 'no-repeat',
          'background-size': 'cover',
        },
      },
      {
        tokens: ['app.content', 'chat.view', 'part:conversation-main'],
        declarations: {
          background: 'var(--cherrycss-starry-night-color-background)',
          'backdrop-filter': 'blur(var(--cherrycss-starry-night-background-blur))',
        },
      },
      {
        tokens: ['part:message-content', 'chat.composer', 'part:code-block'],
        declarations: {
          'backdrop-filter': 'blur(var(--cherrycss-starry-night-element-blur))',
          border: '1px solid var(--border)',
          'border-radius': 'var(--cherrycss-starry-night-radius-dynamic)',
          'box-shadow': '0 4px 18px var(--cherrycss-starry-night-shadow-color)',
        },
      },
    ],
  },
  'pulse-interactive': {
    contrastReview: ['light'],
    sources: {
      background: {
        light: PROFILE_SOURCE('--background-light-new'),
        dark: PROFILE_SOURCE('--background-dark-new'),
      },
      card: {
        light: PROFILE_SOURCE('--background-assistant-light-new'),
        dark: PROFILE_SOURCE('--background-dark-new'),
      },
      primary: {
        light: PROFILE_SOURCE('--button-hover-light'),
        dark: PROFILE_SOURCE('--button-hover-dark'),
      },
      accent: {
        light: PROFILE_SOURCE('--button-hover-light'),
        dark: PROFILE_SOURCE('--button-hover-dark'),
      },
      'chat-user': {
        light: PROFILE_SOURCE('--chat-background-user-light'),
        dark: PROFILE_SOURCE('--chat-background-user-dark'),
      },
    },
    rules: [
      {
        tokens: ['app.window'],
        declarations: {
          'font-family': "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          'font-feature-settings': "'calt', 'cv07', 'ss03'",
        },
      },
      {
        tokens: ['chat.composer', 'part:composer-input', 'part:composer-actions'],
        declarations: {
          'border-radius': 'var(--cherrycss-pulse-interactive-button-border-radius)',
          transition:
            'border-radius var(--cherrycss-pulse-interactive-short-timer) var(--cherrycss-pulse-interactive-animation)',
        },
      },
      {
        tokens: ['part:composer-actions'],
        state: 'hover',
        declarations: {
          'background-color': 'var(--accent)',
          'border-radius': 'var(--cherrycss-pulse-interactive-button-border-radius-hover)',
        },
      },
    ],
  },
}

const SURFACE_PAIRS: readonly [string, string][] = [
  ['card', 'card-foreground'],
  ['secondary', 'secondary-foreground'],
  ['muted', 'muted-foreground'],
  ['accent', 'accent-foreground'],
  ['sidebar', 'sidebar-foreground'],
  ['sidebar-accent', 'sidebar-accent-foreground'],
]

function themeError(themeId: string, message: string): Error {
  return new Error(`[CherryCSS v2:${themeId}] ${message}`)
}

function namespaceName(themeId: string, sourceName: string): string {
  const safeId = themeId.toLowerCase().replace(/[^a-z0-9-]/g, '-')
  return `--cherrycss-${safeId}-${sourceName.slice(2)}`
}

function rewriteReferences(themeId: string, value: string): string {
  return value.replace(/var\(\s*(--[A-Za-z0-9_-]+)/g, (_match, sourceName: string) => {
    return `var(${namespaceName(themeId, sourceName)}`
  })
}

function readPaletteRoots(themeId: string, css: string): Record<Mode | 'root', SourceMap> {
  let root: Root
  try {
    root = postcss.parse(css, { from: `${themeId}.css` })
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    throw themeError(themeId, `malformed legacy CSS: ${message}`)
  }

  const palettes: Record<Mode | 'root', SourceMap> = {
    root: new Map(),
    light: new Map(),
    dark: new Map(),
  }

  root.walkRules((rule) => {
    const selector = rule.selector.trim()
    let target: Mode | 'root' | undefined

    if (selector === ':root') {
      target = 'root'
    } else {
      const modeMatch = selector.match(/^body\[theme-mode=(?:(["'])(light|dark)\1|(light|dark))\]$/)
      if (modeMatch) {
        target = (modeMatch[2] || modeMatch[3]) as Mode
      } else if (/^body\[theme-mode=/.test(selector) && !/[\s,]/.test(selector)) {
        throw themeError(themeId, `unknown legacy mode root ${JSON.stringify(selector)}`)
      }
    }

    if (!target) return

    rule.each((node) => {
      if (node.type !== 'decl' || !node.prop.startsWith('--')) return
      palettes[target].set(node.prop, node.value.trim())
    })
  })

  return palettes
}

function mergeMode(root: SourceMap, mode: SourceMap): SourceMap {
  return new Map([...root, ...mode])
}

function profileCandidates(
  profile: ThemeV2Profile | undefined,
  canonical: CanonicalName,
  mode: Mode
): readonly string[] {
  const configured = profile?.sources?.[canonical]
  if (!configured) return DEFAULT_SOURCES[canonical]
  if (Array.isArray(configured)) return configured
  return (configured as Partial<Record<Mode, readonly string[]>>)[mode] || []
}

function chooseSource(
  themeId: string,
  palette: SourceMap,
  candidates: readonly string[],
  required: boolean
): string | undefined {
  const source = candidates.find((candidate) => palette.has(candidate))
  if (!source && required) {
    throw themeError(themeId, `required profile source is missing: ${candidates.join(' or ')}`)
  }
  return source
}

function resolveSourceValue(
  themeId: string,
  palette: SourceMap,
  sourceName: string,
  seen = new Set<string>()
): string {
  if (seen.has(sourceName)) {
    throw themeError(themeId, `circular source variable reference at ${sourceName}`)
  }
  const value = palette.get(sourceName)
  if (value === undefined) {
    throw themeError(themeId, `unresolved source variable ${sourceName}`)
  }

  const nextSeen = new Set(seen).add(sourceName)
  return value.replace(/var\(\s*(--[A-Za-z0-9_-]+)(?:\s*,[^)]*)?\s*\)/g, (_match, dependency) =>
    resolveSourceValue(themeId, palette, dependency, nextSeen)
  )
}

function isColorValue(value: string): boolean {
  const normalized = value.trim().toLowerCase()
  if (
    !normalized ||
    normalized === 'none' ||
    /(?:linear|radial|conic)-gradient\(/.test(normalized) ||
    /url\(/.test(normalized)
  ) {
    return false
  }
  return (
    /^#[0-9a-f]{3,8}$/i.test(normalized) ||
    /^(?:rgb|rgba|hsl|hsla|hwb|lab|lch|oklab|oklch|color|color-mix)\(/.test(normalized) ||
    /^[a-z]+$/i.test(normalized)
  )
}

function parseRgb(value: string): [number, number, number] | undefined {
  const hex = value.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i)?.[1]
  if (hex) {
    if (hex.length === 8 && Number.parseInt(hex.slice(6, 8), 16) < 255) return undefined
    const expanded =
      hex.length === 3 ? [...hex].map((character) => character.repeat(2)).join('') : hex
    return [
      Number.parseInt(expanded.slice(0, 2), 16),
      Number.parseInt(expanded.slice(2, 4), 16),
      Number.parseInt(expanded.slice(4, 6), 16),
    ]
  }

  const rgb = value
    .trim()
    .match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:\s*[,/]\s*([\d.]+)(%)?)?\s*\)$/i)
  if (!rgb) return undefined
  if (rgb[4] && Number(rgb[4]) < (rgb[5] ? 100 : 1)) return undefined
  return [Number(rgb[1]), Number(rgb[2]), Number(rgb[3])]
}

function luminance([red, green, blue]: [number, number, number]): number {
  const channels = [red, green, blue].map((channel) => {
    const value = channel / 255
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
  })
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722
}

function contrast(left: [number, number, number], right: [number, number, number]): number {
  const [lighter, darker] = [luminance(left), luminance(right)].sort((a, b) => b - a)
  return (lighter + 0.05) / (darker + 0.05)
}

function choosePrimaryForeground(
  themeId: string,
  palette: SourceMap,
  primarySource: string
): string {
  const primary = parseRgb(resolveSourceValue(themeId, palette, primarySource))
  if (!primary) {
    throw themeError(themeId, `cannot resolve ${primarySource} to a solid RGB color`)
  }

  const candidates = [...palette.keys()]
    .map((source) => {
      try {
        const color = parseRgb(resolveSourceValue(themeId, palette, source))
        return color ? { source, score: contrast(primary, color) } : undefined
      } catch {
        return undefined
      }
    })
    .filter((candidate): candidate is { source: string; score: number } => Boolean(candidate))
    .sort((left, right) => right.score - left.score || left.source.localeCompare(right.source))

  if (!candidates[0]) {
    throw themeError(themeId, `no solid palette color can pair with ${primarySource}`)
  }
  return candidates[0].source
}

function sourceReference(themeId: string, sourceName: string): string {
  return `var(${namespaceName(themeId, sourceName)})`
}

function compileMode(themeId: string, mode: Mode, palette: SourceMap, profile?: ThemeV2Profile) {
  const canonical = new Map<string, string>()
  const configuredCanonicals = new Set(Object.keys(profile?.sources || {}))

  for (const canonicalName of Object.keys(DEFAULT_SOURCES) as CanonicalName[]) {
    const candidates = profileCandidates(profile, canonicalName, mode)
    const required = configuredCanonicals.has(canonicalName)
    const source = chooseSource(themeId, palette, candidates, required)
    if (!source) continue

    const resolved = resolveSourceValue(themeId, palette, source)
    if (!isColorValue(resolved)) {
      throw themeError(
        themeId,
        `${source} selected for --${canonicalName} is not a color value: ${JSON.stringify(resolved)}`
      )
    }
    canonical.set(canonicalName, sourceReference(themeId, source))
  }

  const foreground = canonical.get('foreground') || 'var(--foreground)'
  if (canonical.has('card')) {
    canonical.set('card-foreground', foreground)
    canonical.set('popover', canonical.get('card')!)
    canonical.set('popover-foreground', foreground)
  }
  if (canonical.has('primary')) {
    const primarySource = chooseSource(
      themeId,
      palette,
      profileCandidates(profile, 'primary', mode),
      true
    )!
    const configuredForeground = profile?.primaryForeground
    const primaryForegroundSource =
      typeof configuredForeground === 'string'
        ? configuredForeground
        : configuredForeground?.[mode] || choosePrimaryForeground(themeId, palette, primarySource)
    if (!palette.has(primaryForegroundSource)) {
      throw themeError(themeId, `required profile source is missing: ${primaryForegroundSource}`)
    }
    const resolvedForeground = resolveSourceValue(themeId, palette, primaryForegroundSource)
    if (!isColorValue(resolvedForeground)) {
      throw themeError(
        themeId,
        `${primaryForegroundSource} selected for --primary-foreground is not a color value`
      )
    }
    canonical.set('primary-foreground', sourceReference(themeId, primaryForegroundSource))
    canonical.set('ring', canonical.get('primary')!)
  }
  for (const [surface, partner] of SURFACE_PAIRS) {
    if (canonical.has(surface) && !canonical.has(partner)) canonical.set(partner, foreground)
  }
  if (canonical.has('sidebar')) {
    if (canonical.has('primary')) {
      canonical.set('sidebar-primary', canonical.get('primary')!)
      canonical.set('sidebar-primary-foreground', canonical.get('primary-foreground')!)
      canonical.set('sidebar-ring', canonical.get('ring')!)
    }
    if (canonical.has('border')) canonical.set('sidebar-border', canonical.get('border')!)
  }

  return canonical
}

function validateProfile(themeId: string, profile: ThemeV2Profile | undefined): void {
  if (!profile) return
  const tokenAllowlist = new Set<string>(V2_SEMANTIC_TOKENS)
  const propertyAllowlist = new Set<string>(SAFE_SEMANTIC_PROPERTIES)

  for (const rule of profile.rules || []) {
    if (!rule.tokens.length) throw themeError(themeId, 'semantic profile rule has no tokens')
    for (const token of rule.tokens) {
      if (!tokenAllowlist.has(token)) throw themeError(themeId, `unsafe semantic token ${token}`)
    }
    if (rule.state && rule.state !== 'hover' && rule.state !== 'focus-within') {
      throw themeError(themeId, `unsafe semantic state ${rule.state}`)
    }
    for (const [property, value] of Object.entries(rule.declarations)) {
      if (!propertyAllowlist.has(property)) {
        throw themeError(themeId, `unsafe semantic property ${property}`)
      }
      if (/!\s*important/i.test(value)) {
        throw themeError(themeId, `semantic property ${property} contains !important`)
      }
    }
  }
}

function emitMode(
  themeId: string,
  mode: Mode,
  palette: SourceMap,
  canonical: Map<string, string>
): string {
  const lines = [`html.${mode}, body.${mode} {`]
  for (const sourceName of [...palette.keys()].sort()) {
    const value = rewriteReferences(themeId, palette.get(sourceName)!)
    lines.push(`  ${namespaceName(themeId, sourceName)}: ${value};`)
  }
  for (const [name, value] of canonical) lines.push(`  --${name}: ${value};`)
  lines.push('}')
  return lines.join('\n')
}

function emitSemanticRules(profile: ThemeV2Profile | undefined): string[] {
  return (profile?.rules || []).map((rule) => {
    const state = rule.state ? `:${rule.state}` : ''
    const selectors = rule.tokens.map((token) => `[data-ui~='${token}']${state}`).join(',\n')
    const declarations = Object.entries(rule.declarations)
      .map(([property, value]) => `  ${property}: ${value};`)
      .join('\n')
    return `${selectors} {\n${declarations}\n}`
  })
}

export function compileThemeCssV2(theme: Pick<Theme, 'id' | 'css'>): string {
  const profile = THEME_V2_PROFILES[theme.id]
  validateProfile(theme.id, profile)
  const palettes = readPaletteRoots(theme.id, theme.css)
  const light = mergeMode(palettes.root, palettes.light)
  const dark = mergeMode(palettes.root, palettes.dark)
  const lightCanonical = compileMode(theme.id, 'light', light, profile)
  const darkCanonical = compileMode(theme.id, 'dark', dark, profile)

  const sections = [
    `/* CherryCSS v2 compiled theme: ${theme.id}. Generated from the legacy palette source. */`,
    emitMode(theme.id, 'light', light, lightCanonical),
    emitMode(theme.id, 'dark', dark, darkCanonical),
    ...emitSemanticRules(profile),
  ]
  return `${sections.join('\n\n')}\n`
}

export function isExactV2SemanticRule(rule: Rule): boolean {
  return rule.selectors.every((selector) =>
    /^\[data-ui~='[^']+'\](?::(?:hover|focus-within))?$/.test(selector.trim())
  )
}
