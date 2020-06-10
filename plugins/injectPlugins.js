/**
 * 注入到服务端及客户端
 * **/
export default ({ app }, inject) => {
  /**
   * 数字转等级工具
   * @param tier 等级 Number
   * @return 对应等级字母
   */
  inject('getLevel', tier => {
    if (!tier) {
      return
    }
    tier = parseInt(tier)
    switch (tier) {
      case 1:
        return 'S'
      case 2:
        return 'A'
      case 3:
        return 'B'
      case 4:
        return 'C'
      case 5:
        return 'D'
      case 6:
        return '?'
      default:
        break
    }
  })
}
