// eslint-disable-next-line no-extend-native
Date.prototype.Format = function(fmt) {
  const o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + ''))
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

/**
 * 将时间戳转换为距离当前的 XX分钟前，XX小时前等
 * 时间显示规则：
 * 小于60秒： 刚刚
 * 小于60分钟： XX分钟前
 * 小于24小时： XX小时前
 * 不小于24小时且是昨天的： 昨天
 * 昨天以前且是今年的： XX月XX日
 * 去年及以前的： XX年XX月XX日
 * @param ts
 * @returns {string|string}
 */
const tsToaGo = ts => {
  const ms = Math.abs(Math.round(new Date() / 1000) - ts)
  const curDate = new Date(ts * 1000) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  const Y = curDate.getFullYear()
  const D = curDate.getDate()
  if (ms < 60) {
    return '刚刚'
  } else if (ms >= 60 && ms < 3600) {
    return parseInt(ms / 60) + '分钟前'
  } else if (ms >= 3600 && ms < 86400) {
    return parseInt(ms / 60 / 60) + '小时前'
  } else if (Y === new Date().getFullYear() && ms >= 86400 && D === (new Date().getDate() - 1)) {
    return '昨天'
  } else if (Y === new Date().getFullYear()) {
    return new Date(ts * 1000).Format('MM月dd日')
  } else if (Y < new Date().getFullYear()) {
    return new Date(ts * 1000).Format('yy年MM月dd日')
  }
}

export default {
  tsToaGo
}
