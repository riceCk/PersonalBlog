/*
* 每日一句连接数据库
 */
let dbutil = require('./DBUtil');
let log = require('../log');

function insertEveryDay (content, ctime, success) {
  let insertSql = 'insert into every_day (`content`, `ctime`) value(?, ?)';
  let params = [content, ctime];
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(insertSql, params, function (error, result) {
    if (error == null) {
      success(result)
    }else {
      log('insertEveryDay:\n' +  error, 'EveryDayDao.log')
    }
  })
  connection.end()
}

function selectEveryDay (success) {
  let querySql = 'select ctime, content from every_day order by id desc limit 1';
  let connection = dbutil.createConnection();
  connection.query(querySql, function(error, result) {
    if (error == null) {
      success(result)
    } else {
	  log('selectEveryDay:\n' +  error, 'EveryDayDao.log')
    }
  })
}
module.exports.insertEveryDay = insertEveryDay;
module.exports.selectEveryDay = selectEveryDay;

