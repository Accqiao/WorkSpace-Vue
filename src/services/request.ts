// 引入axios
import axios from 'axios'
// 引入qs模块，对数据进行序列化
import QS from 'qs'
// 引入message模块，toast提示
import { ElNotification } from 'element-plus'
// 引入storage模块，操作token
// import { session } from '@/utils/storage.js'

// 请求超时时间
axios.defaults.timeout = 10000

// 请求拦截器
// axios.interceptors.request.use(
//   config => {
//     // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//     // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
//     const token = session.get('Token')
//     token && (config.headers.Authorization = token)
//     if(config.method.toUpperCase() === 'POST') {
//       config.headers['Content-Type'] = 'application/json;charset=utf-8'
//     }
//     return config
//   },
//   error => {
//     return Promise.error(error)
//   })

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // console.log(response)
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 服务器状态码不是200的情况
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 500:
          ElNotification({
            title: '500',
            message: '服务器错误，请稍后再试！',
            type: 'error',
          })
          break
        case 404:
          ElNotification({
            title: '404',
            message: '网错错误，请稍后再试！',
            type: 'error',
          })
          break
        // 其他错误，直接抛出错误提示
        default:
          ElNotification({
            title: error.response.status,
            message: error.response.data.message,
            type: 'error',
          })
      }
      return Promise.reject(error.response)
    }
  }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url: string, params: any) {
  console.log("GET",url,params);
  return new Promise((resolve, reject) =>{
    axios.get(url, {
      params: params
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
/**
* post方法，对应post请求
* @param {String} url [请求的url地址]
* @param {Object} params [请求时携带的参数]
*/
export function post(url: string, params: any) {
  console.log("POST",url,params);
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

