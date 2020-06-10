import Vue from 'vue'

import dateFilters from '~/filters/dateFilters'

// 注册日期过滤器
Object.keys(dateFilters).forEach(key => {
  Vue.filter(key, dateFilters[key])
})

// 默认抛出错误
// https://zhuanlan.zhihu.com/p/37447164
Vue.config.errorHandler = function(err, vm) {
  console.error(err)
}

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时 focus
  inserted: function(el) {
    // 聚焦元素
    el.focus()
  }
})
