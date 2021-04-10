export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'renderer', name: 'renderer', content: 'webkit' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,user-scalable=no' },
      { hid: 'keywords', name: 'keywords', content: 'NUXT,SSR' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { src: './js/rem.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vant/lib/index.css',
    '@/assets/scss/variables.scss'
  ],

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router
  router: {
    middleware: 'i18n'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vant',
    '@/plugins/i18n.js',
    { src: '@/plugins/vconsole', ssr: false },
    { src: '@/plugins/main', ssr: false }
  ],

  // https://www.nuxtjs.cn/api/configuration-generate
  generate: {
    routes: ['/', '/about', '/fr', '/fr/about']
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  // https://www.nuxtjs.cn/guide/modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
