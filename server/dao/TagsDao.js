/*
* tags表数据连接
 */
let dbutil = require('./DBUtil');
let log = require('../log');

function insertTag (tag, ctime, utime, success) {
  let insertSql = 'insert into tags (`tag`, `ctime`, `utime`) value(?, ?, ?)';
  let params = [tag, ctime, utime];
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(insertSql, params, function (error, result) {
	if (error == null) {
	  success(result);
	}else {
	  console.log(error);
	  log('insertTag:\n' +  error, 'TagsDao.log')
	}
  });
  connection.end();
}

function queryTag (tag, success) {
  let querySql = 'select * from tags where tag = ?;';
  let params = [tag];
  let connection = dbutil.createConnection();
  connection.query(querySql, params, function(error, result) {
	if (error == null) {
	  success(result)
	} else {
	  log('selectEveryDay:\n' +  error, 'EveryDayDao.log')
	}
  })
}
module.exports.insertTag = insertTag;
module.exports.queryTag = queryTag;
