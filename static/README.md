# STATIC

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your static files.
Each file inside this directory is mapped to `/`.
Thus you'd want to delete this README.md before deploying to production.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/assets#static).


## \# 加载静态资源

对于不需要通过 Webpack 处理的静态资源文件，可以放置在 static 目录中。  
默认情况下，所有的资源URL例如 `<img src="...">`、 `background: url(...)` 和 CSS中的 `@import` 均会被解析成模块通过 require 引用。  
例，如果我们在CSS代码中使用 `url('~assets/image.png')`, 那么编译后它将被转换成 `require('~/assets/image.png')`。  
如果你的静态资源文件需要 Webpack 做构建编译处理，可以放到 assets 目录，否则可以放到 static 目录中去。

> 请注意: 从Nuxt 2.0开始，~/alias将无法在CSS文件中正确解析。你必须在url CSS引用中使用~assets（没有斜杠）或@别名，即background:url("~assets/banner.svg")

如果我们在 `pages/index.vue` 中使用以下代码引用图片资源：
```vue
<template>
  <img src="~/assets/image.png">
</template>
```

或者
```vue
<template>
  <img src="~/static/image.png">
</template>
```

又或者 （此文件需要在目录`static`下）
```vue 
<template>
  <img src="/image.png">
</template>
```

还可以

```javascript
selfService: [
  { img: require('~/static/img/getting-started@3x.png'), id: 1, txt: '新手入门' },
],
```


