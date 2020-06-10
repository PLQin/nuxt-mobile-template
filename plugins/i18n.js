import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

export default ({ app, store }) => {
  const data = {}
  const Locale = store.state.locales.locales
  for (let i = 0; i < Locale.length; i++) {
    data[Locale[i]] = require(`~/locales/${Locale[i]}.json`)
  }

  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locales.locale,
    fallbackLocale: 'zh',
    messages: data
  })
}
