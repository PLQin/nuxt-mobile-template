
# nuxt ssr template in mobile

> 一个空的 nuxt-ssr 服务端渲染模板，集成了iview、less、scss、stylus等常用组件，集成i18n国际化插件，简单封装了axios，开箱即用！

🎉 更加的适合移动端开发  
🎉 如果对你有用的话， 请给我一个 star

## \# 目录结构

``` bash
api         // 接口列表
  xxx.js    // 接口分类文件
assets      // 用于组织未编译的静态资源如LESS、SASS或JavaScript
components  // 用于自己编写的Vue组件，比如波动组件、日历组件、分页组件
  common        // 公共组件，系统自动处理导入，页面直接使用即可
  index/*       // 首页页面组件
  users/*       // 用户页面组件   
layouts     // 布局目录，用于组织应用的布局组件，不可更改
middleware  // 用于存放中间件
  i18n.js   // 国际化语言中间件
pages       // 用于存放写的页面，我们主要的工作区域
plugins     // 用于存放JavaScript插件的地方
  i18n.js           // 国际化配置
  injectPlugins.js  // 同时注入到服务端及客户端的方法写在这里
  iview.js          // iview ui 注入
  main.js           // vue 一般配置
  request.js        // axios 封装文件
server      // express 服务端框架
static      // 用于存放静态资源文件，比如图片
store       // 用于组织应用的Vuex 状态管理
  index.js      // vuex主文件
  app.js        // app分类modules,可以参照这个派生其他分类
  actions.js    // nuxtServerInit可以在这里配置
  locales.js    // 国际化vuex配置
utils/*     // 工具库
.editorconfig       // 开发工具格式配置
.eslintrc.js        // ESLint的配置文件，用于检查代码格式
.gitignore          // 配置git不上传的文件
nuxt.config.json    // 用于组织Nuxt.js应用的个性化配置，已覆盖默认配置
package.json        // npm 包管理配置文件
package-lock.json   // npm自动生成，用于帮助package的统一设置的，yarn也有相同的操作
README.md           // 项目介绍
```

## \# 设置

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## \# 异常处理

- 执行命令时，报错 `FATAL  EPERM: operation not permitted, mkdir '\.nuxt\components'`  

  解决办法 ： 使用window得管理员权限， 在cmd中进行 `npm run build` 命令操作


## \# 旁言

本项目使用 `scss` ， 如需使用其他css编译器， 可自行install， 例 ：
```bash
"less": "^3.11.1",
"less-loader": "^5.0.0",
"stylus": "^0.54.7",
"stylus-loader": "^3.0.2"
```

---


For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
