/*
* 文章链接数据库
 */
let dbutil = require('./DBUtil');
let log = require('../log');

// 新增博客内容
function insertArticle (title, content, tags, views, ctime, utime, success) {
  let insertSql = 'insert into blog (`title`, `content`, `tags`, `views`, `ctime`, `utime`) value(?, ?, ?, ?, ?, ?)';
  let params = [title, content, tags, views, ctime, utime];
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(insertSql, params, function (error, result) {
    if (error == null) {
      success(result)
	} else {
	  console.log(error);
	  log('insertArticle:\n' +  error, 'Article.log')
	}
  });
  connection.end()
}

function updateEditArticle(id, title, content, tags, utime, success) {
  let insertSql = 'update blog set title = ?, content = ?, tags = ?, utime = ? where id = ?';
  let params = [title, content, tags, utime, id];
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(insertSql, params, function (error, result) {
    if (error == null) {
	  success(result)
	} else {
      console.log(error);
	  log('updateEditArticle:\n' +  error, 'Article.log')
	}
  })
}

function queryBlogByPage(pageNum, pageSize, success) {
  let insertSql = 'select * from blog order by id desc limit ?, ?';
  let params = [(pageNum - 1) * pageSize, pageSize];
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(insertSql, params, function(error, result) {
    if (error == null) {
      success(result);
	} else {
      console.log(error);
	  log('queryBlogByPage:\n' +  error, 'Article.log')
	}
  });
  connection.end();
}
function queryBlogTotal (success) {
  let insertSql = 'select count(1) as count from blog;';
  let params = [];
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(insertSql, params, function(error, result) {
	if (error == null) {
	  success(result);
	} else {
	  console.log(error);
	  log('queryBlogTotal:\n' +  error, 'Article.log')
	}
  });
  connection.end();
}

function queryByTagsTotal (tag, success) {
  let insertSql = 'select count(1) as count from blog where tags = ?;';
  let params = [tag];
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(insertSql, params, function(error, result) {
	if (error == null) {
	  success(result);
	} else {
	  console.log(error);
	  log('queryByTagsTotal:\n' +  error, 'Article.log')
	}
  });
  connection.end();
}

function queryByTags (pageNum, pageSize, tag, success) {
  let insertSql = 'select * from blog where tags = ? order by id desc limit ?, ?';
  let params = [tag, (pageNum - 1) * pageSize, pageSize];
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(insertSql, params, function(error, result) {
	if (error == null) {
	  success(result);
	} else {
	  console.log(error);
	  log('queryBlogByPage:\n' +  error, 'Article.log')
	}
  });
  connection.end();
}

function queryBlogByDetail (id, success) {
  let insertSql = 'select * from blog where id = ?';
  let params = [id];
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(insertSql, params, function (error, result) {
	if (error == null) {
	  success(result);
	} else {
	  console.log(error);
	  log('queryBlogByDetail:\n' +  error, 'Article.log')
	}
  })
  connection.end();
}
function queryBlogByNext (id, success) {
  let insertSql = 'select id,title from blog where id < ? order by id desc limit 1';
  let params = [id];
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(insertSql, params, function (error, result) {
	if (error == null) {
	  success(result);
	} else {
	  console.log(error);
	  log('queryBlogByDetail:\n' +  error, 'Article.log')
	}
  })
  connection.end();
}
function queryBlogByPrevious (id, success) {
  let insertSql = 'select id,title from blog where id > ? order by id asc limit 1';
  let params = [id];
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(insertSql, params, function (error, result) {
	if (error == null) {
	  success(result);
	} else {
	  console.log(error);
	  log('queryBlogByDetail:\n' +  error, 'Article.log')
	}
  })
  connection.end();
}

function queryAllBlog (success) {
  let insertSql = 'select * from blog order by ctime desc';
  let params = [];
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(insertSql, params, function (error, result) {
    if (error == null) {
      success(result);
	} else {
      console.log(error);
	  log('queryAllBlog: \n' + error, 'Article.log');
	}
  })
  connection.end();
}

function addViews (id, success){
  let querySql = 'update blog set views = views + 1 where id = ?'
  let params = [id];
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(querySql, params, function (error, result) {
	if (error == null) {
	  success(result);
	} else {
	  console.log(error);
	  log('addViews: \n' + error, 'Article.log');
	}
  })
  connection.end();
}

function queryHotBlog (size, success) {
  let querySql = 'select id,title from blog order by views desc limit ?';
  let params = [size];
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(querySql, params, function (error, result) {
	if (error == null) {
	  success(result);
	} else {
	  console.log(error);
	  log('addViews: \n' + error, 'Article.log');
	}
  })
  connection.end();
}

function deleteBlog (id, success) {
  let querySql = 'delete from `blog` where `id` = ?';
  let params = [id];
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(querySql, params, function (error) {
	if (error == null) {
	  success()
	} else {
	  log('deleteBlog: \n' + error, 'Article.log')
	}
  })
}
function deleteTagBlogMapping (blogId, success) {
  let querySql = 'delete from `tag_blog_mapping` where `blog_id` = ?';
  let params = [blogId];
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(querySql, params, function (error) {
	if (error == null) {
	  success()
	} else {
	  log('deleteBlog: \n' + error, 'Article.log')
	}
  })
}


module.exports.insertArticle = insertArticle;
module.exports.queryBlogByPage = queryBlogByPage;
module.exports.queryBlogTotal = queryBlogTotal;
module.exports.queryBlogByDetail = queryBlogByDetail;
module.exports.queryBlogByNext = queryBlogByNext;
module.exports.queryBlogByPrevious = queryBlogByPrevious;
module.exports.queryAllBlog = queryAllBlog;
module.exports.addViews = addViews;
module.exports.queryHotBlog = queryHotBlog;
module.exports.queryByTags = queryByTags;
module.exports.queryByTagsTotal = queryByTagsTotal;
module.exports.deleteBlog = deleteBlog;
module.exports.updateEditArticle = updateEditArticle;
module.exports.deleteTagBlogMapping = deleteTagBlogMapping
