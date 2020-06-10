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
              <!--
                不考虑以相对路径打开的静态站点的情况下， 也可以：
                <img src="/img/arrow-gray@2x.png" alt>
              -->
              <img src="~/static/img/arrow-gray@2x.png" alt>
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
        // 不考虑以相对路径打开的静态站点的情况下， 也可以：
        // { img: '/img/getting-started@3x.png', id: 1, txt: '新手入门' },

        { img: require('~/static/img/getting-started@3x.png'), id: 1, txt: '新手入门' },
        { img: require('~/static/img/phone@3x.png'), id: 1, txt: '更换手机' },
        { img: require('~/static/img/expense-calendar@3x.png'), id: 1, txt: '消费记录' },
        { img: require('~/static/img/real-name@3x.png'), id: 1, txt: '实名认证' }
      ],
      issueList: [
        { id: 1, txt: '如何注册？' },
        { id: 1, txt: '如何设置账号昵称？' },
        { id: 1, txt: '忘记密码怎么办？' },
        { id: 1, txt: '登录/交易密码如何找回或修改？' },
        { id: 1, txt: '如何变更账户绑定的手机？' },
        { id: 1, txt: '如何变更账户绑定的邮箱？' },
        { id: 1, txt: '如何进行KYC？' },
        { id: 1, txt: '如何保护您的账户安全？' },
        { id: 1, txt: '如何充值？' },
        { id: 1, txt: '如何提现？' },
        { id: 1, txt: '如何兑换？' },
        { id: 1, txt: '如何转账？' },
        { id: 1, txt: '如何买入/卖出？' },
        { id: 1, txt: '如何充币？' },
        { id: 1, txt: '如何提币？' },
        { id: 1, txt: '如何添加联系人？' },
        { id: 1, txt: '我的个人信息和身份会受到保护吗？' },
        { id: 1, txt: '如何绑定卡片或帐户？' }
      ]
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    goDetail() {
      this.$router.push({
        path: '/help/detail'
      })
    }
  },
  head() {
    return {}
  }
}
</script>

<style lang="scss" src="./index.scss" scoped></style>
