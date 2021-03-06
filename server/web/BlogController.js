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

// 新增博客接口
function insertArticle(request, response) {
  let postDate = '';
  request.on('data', function (data) {
	postDate += data;
  });
  request.on('end', function () {
	postDate = queryString.parse(postDate);
	response.writeHead(200, respUtil.writeHead);
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
	  log('/insertArticle 接口参数异常', 'web.log')
	}
  })
}

path.set('/insertArticle', insertArticle);

function updateEditArticle (request, response) {
  let postDate = '';
  request.on('data', function (data) {
	postDate += data;
  });
  request.on('end', function () {
    postDate = queryString.parse(postDate);
	response.writeHead(200, respUtil.writeHead);
    if (postDate.title && postDate.content && postDate.id) {
	  serviceSet.updateEditArticle(postDate.id, postDate.title, postDate.content, postDate.tag, timeUtil.getNow(), function (result) {
		response.write(respUtil.writeResult('success', '添加成功', null))
		response.end();
		log('/updateEditArticle 接口调用成功', 'web.log')
	  })
	} else {
	  response.write(respUtil.writeResult('error', '参数异常', null))
	  response.end();
	  log('/updateEditArticle 接口参数异常', 'web.log')
	}
  })
}
path.set('/updateEditArticle', updateEditArticle);

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
  serviceSet.insertTagBlogMapping(tagId, blogId, timeUtil.getNow(), timeUtil.getNow(), function (result) {
	log(`tagId:\n${tagId}\n blog:\n${blogId} \n插入标签博客三表成功`, 'BlogController.log')
  })
}

// 查询博客内容
function queryBlogByPage(request, response) {
  let params = url.parse(request.url, true).query;
  response.writeHead(200, respUtil.writeHead);
  if (params.pageNum && params.pageSize) {
	serviceSet.queryBlogByPage(Number(params.pageNum), Number(params.pageSize), function(result) {
	  serviceSet.queryBlogTotal(function(total) {
		result = imgFilter(result);
		response.write(respUtil.writeResult('success', true, result, total[0].count));
		response.end();
	  });
	})
  } else {
	response.write(respUtil.writeResult('参数异常', false, null));
	response.end();
	log('/queryBlogByPage 接口参数异常', 'web.log');
  }
}

function queryByTags(request, response) {
  let params = url.parse(request.url, true).query;
  response.writeHead(200, respUtil.writeHead);
  if (params.pageNum && params.pageSize) {
	serviceSet.queryByTags(Number(params.pageNum), Number(params.pageSize), params.tag, function(result) {
	  serviceSet.queryByTagsTotal(params.tag, function(total) {
		result = imgFilter(result);
		response.write(respUtil.writeResult('success', true, result, total[0].count));
		response.end();
	  });
	})
  } else {
	response.write(respUtil.writeResult('参数异常', false, null));
	response.end();
	log('/queryByTags 接口参数异常', 'web.log');
  }
}
path.set('/queryByTags', queryByTags);

function imgFilter (result) {
  for (let i = 0; i <result.length; i++) {
    result[i].content = result[i].content.replace(/<img[\w\W]*>/g, "");
	result[i].content = result[i].content.replace(/<[\w\W]{1,5}>/g, "");
	result[i].content = result[i].content.substring(0, 300);
  }
  return result
}

path.set('/queryBlogByPage', queryBlogByPage);

function queryBlogByDetail (request, response) {
  let params = url.parse(request.url, true).query;
  response.writeHead(200, respUtil.writeHead);
  if (params.id) {
	serviceSet.queryBlogByDetail(params.id, function (result) {
	  response.write(respUtil.writeResult('success', true, result[0]));
	  response.end();
	  serviceSet.addViews(params.id, function(result) {})
	})
  } else {
	response.write(respUtil.writeResult('参数异常', false, null));
	response.end();
  }

}
path.set('/queryBlogByDetail', queryBlogByDetail);

function queryAllBlog (request, response) {
  response.writeHead(200, respUtil.writeHead);
  serviceSet.queryAllBlog(function(result) {
	response.write(respUtil.writeResult('success', true, result));
	response.end();
  })
}
path.set('/queryAllBlog', queryAllBlog);

function queryBlogByLimit(request, response) {
  let params = url.parse(request.url, true).query;
  response.writeHead(200, respUtil.writeHead);
  if (params.id) {
	serviceSet.queryBlogByNext(params.id, function(nextList) {
	  let limit = {};
	  limit.next = nextList[0] || '';
	  serviceSet.queryBlogByPrevious(params.id, function (previousList) {
		limit.previous = previousList[0] || '';
		response.write(respUtil.writeResult('success', true, limit));
		response.end();
	  })
	})
  } else {
	response.write(respUtil.writeResult('参数异常', false, null));
	response.end();
  }


}
path.set('/queryBlogByLimit', queryBlogByLimit);

// 热门文章
function queryHotBlog(request, response) {
  response.writeHead(200, respUtil.writeHead);
  serviceSet.queryHotBlog(7, function(result) {
	response.write(respUtil.writeResult('success', true, result));
	response.end();
  })
}

path.set('/queryHotBlog', queryHotBlog);

// 删除博客
function deleteBlog(request, response) {
  response.writeHead(200, respUtil.writeHead)
  let params = url.parse(request.url, true).query;
  if (params.id && params.tag) {
	serviceSet.deleteBlog(params.id, function() {
	  response.write(respUtil.writeResult('success', true, null));
	  response.end();
	  deleteTag(params.id)
	})
  } else {
	response.write(respUtil.writeResult('参数异常', false, null));
	response.end(params.id);
  }
}
function deleteTag (blogId) {
  serviceSet.deleteTagBlogMapping(blogId, function () {
	console.log('成功')
  })
}

path.set('/deleteBlog', deleteBlog);

module.exports.path = path;
