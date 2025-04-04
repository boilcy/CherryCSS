import { Theme } from '@/lib/types'
import { bugfixCss, detectThemeColors } from './themeUtils'

// 导入已经设置了style属性的主题
import { themes as chineseStyleThemes } from './chineseStyle'
import { themes as othersThemes } from './others'

// 合并所有主题
export const origin_themes = [...chineseStyleThemes, ...othersThemes]

export const themes: Theme[] = origin_themes.map((theme) => ({
  ...theme,
  css: `${theme.css}\n${bugfixCss}`,
  colors: theme.colors || detectThemeColors(theme.css),
}))
