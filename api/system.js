import request from '~/plugins/request'

export const fetchMemberInfo = (query) => {
  return request.get(`/api/fetchMemberInfo`, query)
}
