<template>
  <div class="detail">
    <div class="item self-service">
      <h2>自助服务</h2>
      <ul id="ss-list" class="ss-list">
        <li v-for="(item,index) in selfService" :key="index" class="ss-box" @click="goDetail">
          <div>
            <img :src="item.img" alt>
          </div>
          <div>
            <span>{{ item.txt }}</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="line" />

    <div class="item common-issue">
      <h2>常见问题</h2>
      <div id="ci-list" class="ci-list">
        <div class="ci-box" @click="goDetail">
          <div class="row">
            <div class="col-5 content nowrap-ellipsis">
              <span>HuoPay有什么优势？</span>
            </div>
            <div class="col-1 icon">
              <img src="/img/arrow-gray@2x.png" alt>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <h2 id="change-issue" class="change-issue">换一换</h2>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      selfService: [
        { img: '/img/getting-started@3x.png', id: 1, txt: '新手入门' },
        { img: '/img/phone@3x.png', id: 1, txt: '更换手机' },
        { img: '/img/expense-calendar@3x.png', id: 1, txt: '消费记录' },
        { img: '/img/real-name@3x.png', id: 1, txt: '实名认证' }
      ],
      issueList: [
        { id: 1, txt: 'HuoPay有什么优势？' },
        { id: 1, txt: '支持哪些币种？' },
        { id: 1, txt: '如何退出Huopay？' },
        { id: 1, txt: '为什么我转帐一直到不了？' }
      ]
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    goDetail() {
      this.$router.push({
        path: 'help/detail'
      })
    }
  },
  head() {
    return {}
  }
}
</script>

<style lang="scss" src="./index.scss" scoped></style>
