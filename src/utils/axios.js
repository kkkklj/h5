import axios from 'axios';
axios.defaults.withCredentials = true;
import { Toast } from 'vant';
axios.defaults.timeout = 10000
const $http = axios.create({

})
$http.interceptors.response.use(data => {
  const config = data.config;
  //响应拦截器
  if (config.httpFilter) {
    let successCode = config.successCode || 200;
    const raw = data.data,
      code = raw.code,
      res = raw.data;
    if (code == successCode) {
      return res;
    } else {
      if (config.hideToast) {
        return Promise.reject(raw);
      }
      Toast(raw.msg || code);
      return Promise.reject(raw);
    }
  }
  return data;
}, err => {
  return Promise.reject(err)
})
$http.interceptors.request.use(data => {
  //请求拦截器

  return data;
}, err => {
  return Promise.reject(err)
})
export default $http;