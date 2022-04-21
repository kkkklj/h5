import axios from './axios'

const getRoot = (dev) => {
  if(process.env.NODE_ENV === 'production') {
    return 'http://124.221.136.33/'
  } else {
    return dev ? 'api/' : 'root/'
  }
}
export const $API = getRoot(true);
export const $http = axios;