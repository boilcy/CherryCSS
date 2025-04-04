import postcss from 'postcss'
import prefixer from 'postcss-prefix-selector'
import { compileString } from 'sass'

export function prefixThemeCSS(name: string = '', css: string, wrapperClass: string) {
  try {
    const out = postcss()
      .use(
        prefixer({
          prefix: `.${wrapperClass}`,
        })
      )
      .process(css).css
    return out
  } catch (error) {
    console.log(`Error processing ${name}`)
    console.log(error)
    return ''
  }
}

/**
 * Converts SCSS to CSS and then applies the prefix
 * @param scss The SCSS string to convert and prefix
 * @param prefix The class prefix to add
 * @returns Prefixed CSS string
 */
export function prefixScssThemeCSS(name: string = '', scss: string, prefix: string): string {
  try {
    // Compile SCSS to CSS
    const compiledCss = compileString(scss).css

    // Fix theme-mode attribute selectors by adding quotes
    // Only handle light/dark values for better performance
    const normalizedCss = compiledCss.replace(
      /\[theme-mode=(light|dark)\]/g,
      (match, value) => `[theme-mode="${value}"]`
    )

    return prefixThemeCSS(name, normalizedCss, prefix)
  } catch (error) {
    console.error(`Error processing ${name}`, error)
    return ''
  }
}
