const STYLE = 'chineseStyle'

import { changAn } from './changAn'
import { chanZong } from './chanZong'
import { chunMei } from './chunMei'
import { danXia } from './danXia'
import { hanBaiYu } from './hanBaiYu'
import { huGuang } from './huGuang'
import { jinXiangYu } from './jinXiangYu'
import { liuYun } from './liuYun'
import { piPa } from './piPa'
import { qingCi } from './qingCi'
import { qingHua } from './qingHua'
import { qingWu } from './qingWu'
import { ruYaoLan } from './ruYaoLan'
import { ruYaoLv } from './ruYaoLv'
import { shanShui } from './shanShui'
import { suXuan } from './suXuan'
import { tianShui } from './tianShui'
import { xuanZhi } from './xuanZhi'
import { yangPiZhi } from './yangPiZhi'
import { yanHui } from './yanHui'
import { yanYu } from './yanYu'
import { yanZhi } from './yanZhi'
import { yaoHuo } from './yaoHuo'
import { yuShi } from './yuShi'
import { ziTao } from './ziTao'

// 为所有中国风主题设置style属性
const chineseStyleThemes = [
  changAn,
  chanZong,
  chunMei,
  danXia,
  hanBaiYu,
  huGuang,
  jinXiangYu,
  liuYun,
  piPa,
  qingCi,
  qingHua,
  qingWu,
  ruYaoLan,
  ruYaoLv,
  shanShui,
  suXuan,
  tianShui,
  xuanZhi,
  yangPiZhi,
  yanHui,
  yanYu,
  yanZhi,
  yaoHuo,
  yuShi,
  ziTao,
]

// 为每个主题添加style属性
export const themes = chineseStyleThemes.map((theme) => ({
  ...theme,
  style: STYLE,
}))

// 单独导出每个带有style属性的主题
export const changAnWithStyle = { ...changAn, style: STYLE }
export const chanZongWithStyle = { ...chanZong, style: STYLE }
export const chunMeiWithStyle = { ...chunMei, style: STYLE }
export const danXiaWithStyle = { ...danXia, style: STYLE }
export const hanBaiYuWithStyle = { ...hanBaiYu, style: STYLE }
export const huGuangWithStyle = { ...huGuang, style: STYLE }
export const jinXiangYuWithStyle = { ...jinXiangYu, style: STYLE }
export const liuYunWithStyle = { ...liuYun, style: STYLE }
export const piPaWithStyle = { ...piPa, style: STYLE }
export const qingCiWithStyle = { ...qingCi, style: STYLE }
export const qingHuaWithStyle = { ...qingHua, style: STYLE }
export const qingWuWithStyle = { ...qingWu, style: STYLE }
export const ruYaoLanWithStyle = { ...ruYaoLan, style: STYLE }
export const ruYaoLvWithStyle = { ...ruYaoLv, style: STYLE }
export const shanShuiWithStyle = { ...shanShui, style: STYLE }
export const suXuanWithStyle = { ...suXuan, style: STYLE }
export const tianShuiWithStyle = { ...tianShui, style: STYLE }
export const xuanZhiWithStyle = { ...xuanZhi, style: STYLE }
export const yangPiZhiWithStyle = { ...yangPiZhi, style: STYLE }
export const yanHuiWithStyle = { ...yanHui, style: STYLE }
export const yanYuWithStyle = { ...yanYu, style: STYLE }
export const yanZhiWithStyle = { ...yanZhi, style: STYLE }
export const yaoHuoWithStyle = { ...yaoHuo, style: STYLE }
export const yuShiWithStyle = { ...yuShi, style: STYLE }
export const ziTaoWithStyle = { ...ziTao, style: STYLE }
