<template>
  <div class="page-content-inner">
    <div class="error">
      <template v-if="error.statusCode === 404">
        <h1>404</h1>
        <h3>页面不存在</h3>
        <div class="sub-title">可能是因为您的链接地址有误、该文章已经被作者删除或转为私密状态。</div>
      </template>
      <template v-else>
        <h1>{{ error.statusCode }}</h1>
        <h3>系统出现错误</h3>
        <div class="sub-title">服务器太累了，休息会再试试吧！</div>
      </template>
      <nuxt-link to="/" class="button">返回首页</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>

<style scoped>
.error {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  text-align: center;
}
h1 {
  font-size: 72px;
}
h3 {
  margin: 20px 0 20px 0;
  font-weight: bold;
  display: block;
  font-size: 1.17em;
}
.sub-title {
  margin: 10px 0 30px 0;
  font-size: 14px;
}
.button {
  padding: 13px 0;
  width: 160px;
  font-size: 15px;
  border-radius: 40px;
  color: #ffffff;
  background-color: #1e1a3c;
  border-color: #1e1a3c;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  user-select: none;
}
</style>
