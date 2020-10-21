
这个目录包含静态文件。
这个目录中的每个文件都映射到' / '。

例如: `/static/robots.txt` 被映射为 `/robots.txt`.

更多关于这个目录使用的信息在 [这个文档](https://nuxtjs.org/guide/assets#static).


## \# 加载静态资源

见 [资源文件 - NuxtJS](https://zh.nuxtjs.org/guide/assets/)

对于不需要通过 Webpack 处理的静态资源文件，可以放置在 static 目录中。  
默认情况下，所有的资源URL例如 `<img src="...">`、 `background: url(...)` 和 CSS中的 `@import` 均会被解析成模块通过 require 引用。  
例，如果我们在CSS代码中使用 `url('~assets/image.png')`, 那么编译后它将被转换成 `require('~/assets/image.png')`。  
如果你的静态资源文件需要 Webpack 做构建编译处理，可以放到 assets 目录，否则可以放到 static 目录中去。

> 请注意: 从Nuxt 2.0开始，~/alias将无法在CSS文件中正确解析。你必须在url CSS引用中使用~assets（没有斜杠）或@别名，即background:url("~assets/banner.svg")

如果我们在 `pages/index.vue` 中使用以下代码引用图片资源：
```vue
<template>
  <img src="~/assets/img/logo.png" />
  <img src="~/static/img/logo.png" />

  <!-- 引用 static 目录下的图片(不考虑以相对路径打开的静态站点的情况下) -->
  <img src="/img/logo.png" />
</template>
```

还可以

```javascript
list: [
  { img: require('~/static/img/getting-started@3x.png'), id: 1 },
],
```

```css
background: url("~assets/img/logo.png");
background-image: url("~static/img/security-center-bg@2x.png");
width: 20px;
height: 20px;
background-size: cover;
```
