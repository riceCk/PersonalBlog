// axios 拦截器
import axios from 'axios'

// 添加url默认前缀
// axios.defaults.baseURL = 'http://39.108.107.212'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
    // 添加请求拦截器
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    config.params = {
        ...config.params
    }
    return config
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})
export default axios
