import postcss from 'postcss'
import { isExactV2SemanticRule } from './themes/v2Compatibility'

export function scopeThemeCssForPreview(css: string, wrapperClass: string): string {
  if (!/^[A-Za-z_][A-Za-z0-9_-]*$/.test(wrapperClass)) {
    throw new Error(`Invalid preview wrapper class: ${wrapperClass}`)
  }

  const root = postcss.parse(css)
  root.walkRules((rule) => {
    if (
      rule.parent?.type === 'atrule' &&
      'name' in rule.parent &&
      typeof rule.parent.name === 'string' &&
      /keyframes$/i.test(rule.parent.name)
    ) {
      return
    }

    const transformed = rule.selectors.map((selector) => {
      const normalized = selector.trim()
      if (normalized === 'html.light' || normalized === 'body.light') {
        return `.${wrapperClass}.light`
      }
      if (normalized === 'html.dark' || normalized === 'body.dark') {
        return `.${wrapperClass}.dark`
      }
      if (normalized === ':root') return `.${wrapperClass}`
      if (isExactV2SemanticRule(rule)) {
        return normalized.startsWith("[data-ui~='app.window']")
          ? `.${wrapperClass}${normalized}`
          : `.${wrapperClass} ${normalized}`
      }
      throw new Error(`Unsupported selector in compiled preview CSS: ${normalized}`)
    })
    rule.selectors = [...new Set(transformed)]
  })
  return root.toString()
}
