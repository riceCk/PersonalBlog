import Mock from 'mockjs'
import data from './data.json'

Mock.mock('http://archives.cn', {
  total: 2,
  codeMsg: true,
  list: data.archives
})
