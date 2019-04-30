/**
 * 标签接口
 */
let url = require('url');
let queryString = require('querystring');
let serviceSet = require('../service/ServiceSet');
let timeUtil = require('../util/TimeUtil');
let respUtil = require('../util/RespUtil');
let path = new Map();
let log = require('../log.js');

function queryRandomTags (request, response) {
  response.writeHead(200, respUtil.writeHead);
  serviceSet.queryAllTag(function(result) {
    result.sort(function () {
      return Math.random() > 0.5 ? true : false;
	});
	response.write(respUtil.writeResult('success', '查询成功', result));
	response.end();
  })
}

function testInterface (request, response) {
  response.writeHead(200, respUtil.writeHead);
  let postDate = '';
  request.on('data', function (data) {
	postDate += data;
	console.log(postDate, '测试接口数据')
  });
  response.write(respUtil.writeResult('success', '查询成功', null));
  response.end();
}
path.set("/queryRandomTags", queryRandomTags);
path.set("/testInterface", testInterface);
module.exports.path = path;
