import axios from 'axios'
import { Notification } from 'element-ui'

const http = axios.create({
  // 请求超时时间
  timeout: 5000
})

// 请求拦截器
http.interceptors.request.use(config => {
  config.headers['Authorization'] = localStorage.getItem('token')
  return config
},
error => {
  Notification.error({
    title: '错误',
    message: '请求错误'
  })
  return Promise.reject(error)
})

// 相应拦截器
http.interceptors.response.use(response => {
  if (response.status === 200) {
    // 这里还可以进一步对后端返回的数据做判断，比如后端时机是返回一个异常信息。这里可以做一个错误的信息提示。
    return response.data
  } else {
    Notification.error({
      title: '错误',
      message: response.data.message
    })
  }
},
error => {
  Notification.error({
    title: '错误',
    message: '网络错误'
  })
  return Promise.reject(error)
}
)

export default http
