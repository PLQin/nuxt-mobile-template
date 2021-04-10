import request from '~/utils/request'

export const fetchMemberInfo = (query) => {
  return request.get(`/api/fetchMemberInfo`, query)
}
