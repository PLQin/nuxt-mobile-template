import Cookies from 'js-cookie'
import Locale from '~/locales'
// 获取编译启动的默认语言
const ENV_LANGUAGE = process.env.LANGUAGE ? process.env.LANGUAGE : 'zh'

export const state = () => ({
  locales: Locale(),
  locale: ENV_LANGUAGE
})

export const mutations = {
  /** 保存全局默认语言 **/
  SET_LANGUAGE(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      // console.log('setLanguage=' + locale)
      Cookies.set('language', locale)
      state.locale = locale
    }
  }
}
