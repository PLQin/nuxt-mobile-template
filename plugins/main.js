import Vue from 'vue'
import dateFilters from '@/filters/dateFilters'

// 注册日期过滤器
Object.keys(dateFilters).forEach(key => {
  Vue.filter(key, dateFilters[key])
})
