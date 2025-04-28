const STYLE = 'others'

import { claude } from './claude'
import { dopamine } from './dopamine'
import { dracula } from './dracula'
import { gladiia } from './gladiia'
import { mint } from './mintyLavender'
import { moNai } from './moNai'
import { muShanZi } from './muShanZi'
import { naiCha } from './naiCha'
import { starryNight } from './starryNight'
import { vitesseSoft } from './vitesseSoft'


// 为所有其他风格主题设置style属性
const othersThemes = [claude, dopamine, dracula, gladiia, moNai, naiCha, mint, vitesseSoft,muShanZi]

// 为每个主题添加style属性
export const themes = othersThemes.map((theme) => ({
  ...theme,
  style: STYLE,
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
export const vitesseSoftWithStyle = { ...vitesseSoft, style: STYLE }
export const muShanZitWithStyle = { ...muShanZi, style: STYLE }