import axios from '../axios.js'

let api = {
  // 编辑每日一句接口
  getEditEveryDay (params) {
    return axios.post('/editEveryDay', params)
  },
  // 查询每日一句接口
  getInquireEveryDay () {
    return axios.get('/inquireEveryDay')
  }
}

export default api
