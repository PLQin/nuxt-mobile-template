<template>
  <div class="page-content-inner">
    <h2>{{ $t('headerNav.home') }}</h2>
    <h3>{{ pageTitle }}</h3>
    <div>
      <IndexPageComponents />
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import IndexPageComponents from '../components/index/IndexPageComponents'
export default {
  name: 'Index',
  components: {
    IndexPageComponents
  },
  async asyncData({ app, store, params, req, res }) {
    return {
      pageTitle: 'hello nuxt index'
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
  head() {
    return {
      title: this.pageTitle,
      meta: [
        { hid: 'keywords', name: 'keywords', content: this.pageKeywords },
        { hid: 'description', name: 'description', content: this.pageDescription }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
