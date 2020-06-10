<template>
  <div class="layout-container">
    <BaseHeader />
    <div class="router-container">
      <nuxt />
    </div>
    <BaseFooter />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'Layout',
  components: {},
  computed: {
    ...mapGetters([]),
    ...mapState({
      device: state => state.app.device
    })
  },
  mounted() {}
}
</script>

<style lang="scss">
.router-container {
  display: flex;
}

.page-content-inner {
  width: 990px;
  min-height: calc(100vh - 64px - 110px);
  margin: 0 auto;
  position: relative;
  padding: 60px 0;
}
</style>
