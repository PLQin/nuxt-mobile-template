<template>
  <div class="page-content-inner">
    <h2>{{ $t('headerNav.users') }}</h2>
    <h3>{{ $metaInfo.title }}</h3>
    <div>
      <UsersPageComponents />
      <br>
      <div>
        <ul>
          <li
            v-for="(item, index) in dataList"
            :key="index"
          >
            <nuxt-link
              :to="'/users/' + item.relId"
              class="item"
            >{{ item.relId }} -- {{ item.sk }}</nuxt-link>
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
import { fetchUsersList } from '@/api/users'
import UsersPageComponents from '@/components/users/UsersPageComponents'
export default {
  name: 'Users',
  components: {
    UsersPageComponents
  },
  async asyncData({ app, store, params, req, res }) {
    const [data] = await Promise.all([
      fetchUsersList({
        pageNum: 1
      })
    ])
    return {
      dataList: data.data
    }
  },
  data() {
    return {
      pageTitle: this.$t('global.userList')
    }
  },
  mounted() {
    // fetchUsersList({
    //   pageNum: 1
    // }).then((res) => {
    //   this.dataList = res.data
    // })
  },
  methods: {},
  head() {
    return {
      title: this.$t('global.userList'),
      meta: [
        { hid: 'keywords', name: 'keywords', content: this.$t('global.userList') },
        { hid: 'description', name: 'description', content: this.$t('global.userList') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .item {
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #47494E

    &:hover {
      color: #218ff2
    }
  }
</style>
