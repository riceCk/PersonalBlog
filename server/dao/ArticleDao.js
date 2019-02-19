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

module.exports.insertArticle = insertArticle;
module.exports.queryBlogByPage = queryBlogByPage;
