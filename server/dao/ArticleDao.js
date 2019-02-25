/*
* 文章链接数据库
 */
let dbutil = require('./DBUtil');
let log = require('../log');

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


module.exports.insertArticle = insertArticle;
module.exports.queryBlogByPage = queryBlogByPage;
module.exports.queryBlogTotal = queryBlogTotal;
module.exports.queryBlogByDetail = queryBlogByDetail;
module.exports.queryBlogByNext = queryBlogByNext;
module.exports.queryBlogByPrevious = queryBlogByPrevious;
module.exports.queryAllBlog = queryAllBlog;
