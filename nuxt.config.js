
// Nuxt.js踩坑记，利用Nuxt一键生成多页面静态站点
// https://zhuanlan.zhihu.com/p/37897723
module.exports = {
  globalName: 'ssr',

  // mode: 'universal',

  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  // buildDir: 'dist', // Build 发布目录， 如果不设置， 则会指向 .nuxt

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'renderer', name: 'renderer', content: `webkit` },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,user-scalable=no' },
      { hid: 'keywords', name: 'keywords', content: `NUXT,SSR` },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
      { src: './js/rem.js' } // 使用相对路径是为了适配以相对路径打开的静态站点， 不如此的话则无法在以相对路径打开的静态站点中使用
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ccac76' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/injectPlugins.js' },
    { src: '~plugins/main.js' },
    { src: '~/plugins/i18n.js' },
    { src: '~/components/autoImportCommonComponents.js' },
    { src: '~plugins/iview.js' }
  ],

  // 配置 Nuxt.js 应用生成静态站点的具体方式。
  generate: {
    subFolders: false,
    routes: [
      '/help',
      '/help/detail'
    ]
  },

  // 配置路由中间件
  // https://blog.csdn.net/weixin_40547403/article/details/85332755
  router: {
    middleware: [
      'i18n',
      'permission'
    ],
    mode: 'hash', // 使用 'hash' 主要是为了适配以相对路径打开的静态站点， 必须使用 'hash' 否则路由跳转不生效
    // base:"/en/"
    // base: '/'
    base: process.env.NODE_ENV === 'production' ? './' : '/' // 使用 './' 主要是为了适配以相对路径打开的静态站点
  },

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['cookie-universal-nuxt', { parseJSON: false }]
  ],

  styleResources: {
    // stylus: './assets/css/css.styl'
    scss: './assets/scss/variables.scss'
    // less: './assets/**/*.less'
    // sass: ...
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // 是否允许跨域
    proxy: true
  },

  proxy: {
    '/japi': 'https://www.douyu.com'
  },

  // proxy: {
  //   '^/japi': {
  //     target: 'https://www.douyu.com'
  //     changeOrigin: true // 表示是否跨域
  //     // pathRewrite: { '^/japi': '' }
  //   }
  // },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'], // 为防止重复打包
    transpile: [/^view-design/],
    extractCSS: {
      allChunks: true
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
