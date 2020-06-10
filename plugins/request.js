import qs from 'qs'
import axios from 'axios'

// eslint-disable-next-line no-unused-vars
let baseURI = ''
// console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  // 开发环境
  baseURI = 'http://localhost:3000'
} else if (process.env.NODE_ENV === 'staging') {
  // 生产环境
  baseURI = 'https://staging.douyu.com'
} else {
  // 生产环境
  baseURI = 'https://www.douyu.com'
}

const service = axios.create({
  // 自定义的请求头
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  // 最多重发三次
  retry: { retries: 3 },
  // 超时设置
  timeout: 10000,
  // 是否是可信任(表示跨域请求时是否需要使用凭证)
  withCredentials: true,
  crossDomain: true,
  debug: process.env.NODE_ENV !== 'production'
  // // 响应的数据格式 json / blob /document /arraybuffer / text / stream
  // responseType: 'json',
  // XSRF 设置
  // xsrfCookieName: 'XSRF-TOKEN',
  // xsrfHeaderName: 'X-XSRF-TOKEN'
})

const defaultParams = {
  api_version: '1.0.0',
  ts: Math.round(new Date() / 1000)
}

// POST 传参序列化
service.interceptors.request.use(
  config => {
    config.baseURL = baseURI
    // 如果有apiHost参数，并且等于self  则是调用当前域名下的php接口
    if (config.data && config.data.apiHost === 'self') {
      config.baseURL = '/'
    }
    if (config.params && config.params.apiHost === 'self') {
      config.baseURL = '/'
    }

    if (config.method === 'post') {
      config.data = Object.assign({}, defaultParams, qs.parse(config.data))
    }
    if (config.method === 'get') {
      config.params = Object.assign({}, defaultParams, config.params)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 返回状态判断
service.interceptors.response.use(
  res => {
    // 返回这里，根据你自己的情况进行调整
    return res.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
