import axios from 'axios'
import qs from 'qs'
// 创建 axios 实例
const instance = axios.create({
  baseURL: `${window.location.origin}/weixt/api`, // 设置调用地址
  timeout: 2000 * 10, // 设置超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' // 设置数据类型
  },
  retry: 4, // 设置接口调用失败后最多重试次数
  retryDelay: 1000, // 设置接口调用失败后重试间隔
  transformRequest: data => {
    // 序列化数据 https://github.com/axios/axios#using-applicationx-www-form-urlencoded-format
    // 不推荐使用 URLSearchParams 序列化数据，因为 URLSearchParams 并不是所有浏览器都支持
    return data instanceof Object
      ? qs.stringify({ apiparams: JSON.stringify(data) })
      : data
  }
})

const createAPI = (url, method, config) => {
  config = config || {}
  return instance({
    url,
    method,
    ...config
  })
}
/**
 * 错误处理
 * @param {Object} param0 错误信息
 */
const handleError = ({ message }) => {
  console.error(message)
}
/**
 * 接口调用失败后重试
 * @param {Object} config 请求配置
 */
const networkRetry = config => {
  config.__retryCount += 1

  const backoff = new Promise(resolve => {
    setTimeout(() => {
      console.log('重新请求次数:' + config.__retryCount)
      resolve()
    }, config.retryDelay || 1000)
  })

  return backoff.then(() => {
    return instance(config)
  })
}

/**
 * 响应拦截器。处理接口调用错误。
 */
instance.interceptors.response.use(
  res => {
    const { data, config } = res

    if (data.ret.code !== '200') {
      handleError({
        message: `调用接口失败，服务器处理错误。url: ${config.url}, msg: ${
          data.ret.msg
        }`
      })
      if (!config || !config.retry) {
        return res
      }
      config.__retryCount = config.__retryCount || 0
      if (config.__retryCount < config.retry) {
        return networkRetry(config)
      }
      return Promise.reject(data.ret)
    }
    return res
  },
  error => {
    const { config, message } = error
    handleError({
      message: `调用接口失败, url: ${config.url}。message：${message}`
    })
    if (!config || !config.retry) {
      return Promise.reject(error)
    }
    config.__retryCount = config.__retryCount || 0
    if (config.__retryCount >= config.retry) {
      return Promise.reject(error)
    }
    return networkRetry(config)
  }
)

// 调用不同接口的方法
const user = {
  login: config => createAPI('/base_login_user', 'post', config)
}

export default createAPI
