import { Theme } from '@/lib/types'
import { detectThemeColors } from './themeUtils'
import { compileThemeCssV2 } from './v2Compatibility'

// 导入已经设置了style属性的主题
import { themes as chineseStyleThemes } from './chineseStyle'
import { themes as othersThemes } from './others'

// 合并所有主题
export const origin_themes = [...chineseStyleThemes, ...othersThemes]

export const themes: Theme[] = origin_themes.map((theme) => ({
  ...theme,
  css: compileThemeCssV2(theme),
  colors: theme.colors || detectThemeColors(theme.css),
}))
