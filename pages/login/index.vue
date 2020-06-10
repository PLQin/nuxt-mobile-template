<template>
  <div class="page-content-inner">
    <div class="login-container">
      <Card>
        <p slot="title">{{ $t('global.login') }}</p>
        <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
          <FormItem :label="$t('login.username')" prop="username">
            <Input v-model="formCustom.username" type="text" />
          </FormItem>
          <FormItem :label="$t('login.password')" prop="password">
            <Input v-model="formCustom.password" type="password" />
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')">{{ $t('global.submit') }}</Button>
            <Button
              style="margin-left: 8px"
              @click="handleReset('formCustom')"
            >{{ $t('global.reset') }}</Button>
          </FormItem>
        </Form>
      </Card>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'Login',
  components: {},
  async asyncData({ app, store, params, req, res }) {
    return {}
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your username'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password'))
      } else {
        callback()
      }
    }
    return {
      formCustom: {
        username: '',
        password: ''
      },
      ruleCustom: {
        username: [{ validator: validateUsername, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }]
      }
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success('Success!')
          // 我这里为了演示直接把用户名存token了，正你这里应该是把服务器返回来的token进行存储
          this.$store.commit('SET_TOKEN', this.formCustom.username)
          this.$router.push({
            path: this.$route.query.redirect || '/'
          })
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields()
    }
  },
  head() {
    return {
      title: this.$t('global.login'),
      meta: [
        { hid: 'keywords', name: 'keywords', content: this.$t('global.login') },
        {
          hid: 'description',
          name: 'description',
          content: this.$t('global.login')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  display: block;
  margin: 0 auto;
  width: 420px;
}
</style>
