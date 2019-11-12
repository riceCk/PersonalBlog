/**
 * 登录注册页面的先关接口
 */
let queryString = require('querystring');
let serviceSet = require('../service/ServiceSet');
let respUtil = require('../util/RespUtil');
let url = require('url');
let path = new Map();
let log = require('../log.js');

// 注册新用户添加
function registered(request, response) {
  let postDate = '';
  request.on('data', function (data) {
	postDate += data;
  });
  request.on('end', function () {
	postDate = queryString.parse(postDate);
	response.writeHead(200, respUtil.writeHead);
	if (postDate.user && postDate.eMail && postDate.password) {
	  serviceSet.insertUser(postDate.user, postDate.password, postDate.eMail, function (result) {
		response.write(respUtil.writeResult('success', true, null));
		response.end();
	  })
	} else {
	  response.write(respUtil.writeResult('error', '参数异常', null));
	  response.end();
	  log('/registered 接口异常, 用于注册新用户', 'log.log')
	}
  })
}

path.set('/registered', registered);

// 查询邮箱是否存在
function queryEmail(request, response) {
  response.writeHead(200, respUtil.writeHead);
  let params = url.parse(request.url, true).query;
  if (params.email) {
	serviceSet.queryEmail(params.email, function (result) {
	  if(result.length > 0) {
	    console.log('邮箱存在')
		response.write(respUtil.writeResult('邮箱已存在', false, null));
		response.end();
	  } else {
	    console.log('邮箱可用')
		response.write(respUtil.writeResult('邮箱可用', true, null));
		response.end();
	  }
	})
  } else {
	response.write(respUtil.writeResult('参数异常', false, null));
	response.end();
	log('/queryEmail 接口异常, 邮箱查询有问题', 'log.log')
  }
}

path.set('/queryEmail', queryEmail);

// 登录接口
function login (request, response) {
  let postDate = '';
  request.on('data', function (data) {
    postDate += data;
  });
  request.on('end', function () {
    postDate = queryString.parse(postDate);
	if (postDate.email && postDate.password) {
	  serviceSet.loginInformation(postDate.email, postDate.password, function (result) {
		if (result.length > 0) {
		  console.log({...respUtil.writeHead}, 12321)
		  response.writeHead(200, {...respUtil.writeHead, 'Set-Cookie': 'tick=' + result[0].id});
		  response.write(respUtil.writeResult('success', '登录成功', null))
		  response.end();
		} else {
		  response.writeHead(200, respUtil.writeHead);
		  response.write(respUtil.writeResult('success', '登录失败', null))
		  response.end();
		}
	  })
	} else {
	  response.writeHead(200, respUtil.writeHead);
	  response.write(respUtil.writeResult('参数异常', false, null));
	  response.end();
	  log('/login 接口异常, 用于登录页面', 'log.log')
	}
  })

}

path.set('/login', login);
module.exports.path = path;
