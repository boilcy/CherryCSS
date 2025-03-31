const STYLE = "others"

import { claude } from './claude'
import { dopamine } from './dopamine'
import { dracula } from './dracula'
import { gladiia } from './gladiia'
import { moNai } from './moNai'
import { naiCha } from './naiCha'
import { starryNight } from './starryNight'
import { mint } from './mintyLavender'

// 为所有其他风格主题设置style属性
const othersThemes = [
  claude,
  dopamine,
  dracula,
  gladiia,
  moNai,
  naiCha,
  starryNight,
  mint
]

// 为每个主题添加style属性
export const themes = othersThemes.map(theme => ({
  ...theme,
  style: STYLE
}))

// 单独导出每个带有style属性的主题
export const claudeWithStyle = { ...claude, style: STYLE }
export const dopamineWithStyle = { ...dopamine, style: STYLE }
export const draculaWithStyle = { ...dracula, style: STYLE }
export const gladiiaWithStyle = { ...gladiia, style: STYLE }
export const moNaiWithStyle = { ...moNai, style: STYLE }
export const naiChaWithStyle = { ...naiCha, style: STYLE }
export const starryNightWithStyle = { ...starryNight, style: STYLE }
export const mintyLavenderWithStyle = { ...mint, style: STYLE }