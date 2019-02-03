/**
 * 每日一句接口
 */
let url = require('url');
let queryString = require('querystring');
let serviceSet = require('../service/ServiceSet');
let timeUtil = require('../util/TimeUtil');
let respUtil = require('../util/RespUtil');
let path = new Map();
let log = require('../log.js');

function editEveryDay (request, response) {
  let postDate = '';
  request.on('data', function (data) {
	postDate += data
  });
  request.on('end', function () {
    postDate = queryString.parse(postDate);
	response.writeHead(200, respUtil.writeHead);
	if (postDate.content) {
	  serviceSet.insertEveryDay(postDate.content, timeUtil.getNow(), function () {
		response.write(respUtil.writeResult('success', '添加成功', null))
		response.end();
		log('/editEveryDay 接口调用成功', 'web.log')
	  })
	} else {
	  response.write(respUtil.writeResult('error', '参数异常', null))
	  response.end();
	  log('/editEveryDay 接口参数异常', 'web.log')
	}
  })
}

path.set('/editEveryDay', editEveryDay);

function inquireEveryDay (request, response) {
  response.writeHead(200, respUtil.writeHead);
  serviceSet.selectEveryDay(function(result) {
	response.write(respUtil.writeResult('success', true, result));
	response.end();
  })
}
path.set('/inquireEveryDay', inquireEveryDay);

module.exports.path = path;
