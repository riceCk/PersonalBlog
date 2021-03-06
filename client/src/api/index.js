import axios from '../axios.js'

let api = {
  // 编辑每日一句接口
  getEditEveryDay (params) {
    return axios.post('/editEveryDay', params)
  },
  // 查询每日一句接口
  getInquireEveryDay () {
    return axios.get('/inquireEveryDay')
  },
  postEditArticle (params) {
    return axios.post('/insertArticle', params)
  },
  updateEditArticle (params) {
    return axios.post('/updateEditArticle', params)
  },
  getBlogByPage (params) {
    return axios.get('/queryBlogByPage', {
      params: params
    })
  },
  getBlogByDetail (params) {
	return axios.get('/queryBlogByDetail', {
	  params: params
	})
  },
  queryByTags (params) {
	return axios.get('/queryByTags', {
	  params: params
    })
  },
  getBlogByLimit (params) {
    return axios.get('/queryBlogByLimit', {
      params: params
    })
  },
  queryRandomTags () {
	return axios.get('/queryRandomTags')
  },
  queryAllBlog () {
    return axios.get('/queryAllBlog')
  },
  queryHotBog () {
    return axios.get('/queryHotBlog')
  },
  deleteBlog (params) {
	return axios.get('/deleteBlog', {
	  params: params
    })
  },
  testInterface (params) {
	return axios.post('/testInterface', params)
  },
  // 新用户注册
  registered (params) {
    return axios.post('/registered', params)
  },
  // 判断邮箱是否存在
  queryEmail(params) {
    return axios.get('/queryEmail', {
      params
    })
  },
  login (params) {
    return axios.post('/login', params)
  }
}

export default api
