/**
 * 路由鉴定,一些页面游客无权限访问，需要重新登陆
 * @param next
 * @param route
 * @param store
 * @return {Promise<void>}
 */
export default async function({ next, route, store, redirect }) {
  // 不重定向白名单
  const whiteList = [
    '/',
    '/login',
    '/register',
    '/help',
    '/help/detail'
  ]

  if (store.state.token) {
    if (route.path === '/login' ||
      route.path === '/register' ||
      route.path === '/login/forget') {
      // 返回首页
      next('/')
    } else {
      // 请求申请个人信息接口 => 当有Token的时候
      // store.dispatch('GetUserInfo')
    }
  } else {
    if (whiteList.indexOf(route.path) === -1) {
      redirect('/login?redirect=' + route.path) // 否则全部重定向到登录页
    }
  }
}
