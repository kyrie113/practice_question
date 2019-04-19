import axios from 'axios'
import qs from 'qs'
let instance = axios.create({
  headers: { 'content-type': 'application/x-www-form-urlencoded' }
})
const api = (path, params) => {
  let data = qs.stringify({ apiparams: JSON.stringify(params) })
  return instance({
    method: 'POST',
    url: 'http://weixt.spacetech.com.cn:8090/weixt/api/' + path,
    data: data
  })
    .then(response => {
      if (response.status === 200) {
        // return response.data.data
        return response
      }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}
export default api
