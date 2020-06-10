<template>
  <div class="page-content-inner">
    <h2>{{ $t('headerNav.users') }}</h2>
    <div>
      {{ params }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserDetail',
  components: {},
  async asyncData({ app, store, params, req, res }) {
    return {
      pageTitle: `${params.id}`,
      params: params
    }
  },
  data() {
    return {
      pageKeywords: '用户详情',
      pageDescription: '用户详情'
    }
  },
  mounted() {},
  methods: {},
  head() {
    return {
      title: this.$t('headerNav.users') + this.pageTitle,
      meta: [
        { hid: 'keywords', name: 'keywords', content: this.$t('headerNav.users') + this.pageKeywords },
        { hid: 'description', name: 'description', content: this.$t('headerNav.users') + this.pageDescription }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
