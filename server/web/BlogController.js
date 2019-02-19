/**
 * 文章接口
 */
let url = require('url');
let queryString = require('querystring');
let serviceSet = require('../service/ServiceSet');
let timeUtil = require('../util/TimeUtil');
let respUtil = require('../util/RespUtil');
let path = new Map();
let log = require('../log.js');

function insertArticle(request, response) {
  let postDate = '';
  request.on('data', function (data) {
	postDate += data;
  });
  request.on('end', function () {
	postDate = queryString.parse(postDate);
	response.writeHead(200, respUtil.writeHead)
	if (postDate.title && postDate.content) {
	  serviceSet.insertArticle(postDate.title, postDate.content, postDate.tag, 0, timeUtil.getNow(), timeUtil.getNow(), function (result) {
		response.write(respUtil.writeResult('success', '添加成功', null))
		response.end();
		let blogId = result.insertId;
		let tagList = postDate.tag;
		queryTag(tagList, blogId);
		log('/insertArticle 接口调用成功', 'web.log')
	  })
	} else {
	  response.write(respUtil.writeResult('error', '参数异常', null))
	  response.end();
	  log('/editEveryDay 接口参数异常', 'web.log')
	}
  })
}

path.set('/insertArticle', insertArticle);

function queryTag(tag, blogId) {
  serviceSet.queryTag(tag, function (result) {
	if (result == null || result.length == 0) {
	  insertTag(tag, blogId);
	} else {
	  insertTagBlogMapping(result[0].id, blogId)
	}
  })
}

function insertTag(tag, blogId) {
  serviceSet.insertTag(tag, timeUtil.getNow(), timeUtil.getNow(), function (result) {
	insertTagBlogMapping(result.insertId, blogId)
  })
}

function insertTagBlogMapping(tagId, blogId) {
  debugger
  serviceSet.insertTagBlogMapping(tagId, blogId, timeUtil.getNow(), timeUtil.getNow(), function (result) {
	log(`tagId:\n${tagId}\n blog:\n${blogId} \n插入标签博客三表成功`, 'BlogController.log')
  })
}

function queryBlogByPage(request, response) {
  let params = url.parse(request.url, true).query;
  response.writeHead(200, respUtil.writeHead);
  serviceSet.queryBlogByPage(Number(params.pageNum), Number(params.pageSize), function(result) {
    response.write(respUtil.writeResult('success', true, result))
	response.end();
  })
}

path.set('/queryBlogByPage', queryBlogByPage);

module.exports.path = path;
