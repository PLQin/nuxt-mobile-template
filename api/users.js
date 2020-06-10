import request from '~/plugins/request'

/**
 * 获取用户列表
 * @param query
 */
export const fetchUsersList = (params) => {
  return request.get(`/japi/search/api/getHotList`, {
    params: params
  })
}

/**
 * 获取用户详情
 * @param query
 */
export const fetchUserDetail = (params) => {
  return request.get(`/users/${params.id}`)
}

/**
 * Demo Post
 * @param query
 */
export const demoPost = (params) => {
  return request.post(`/api/userDetail`, params)
}
