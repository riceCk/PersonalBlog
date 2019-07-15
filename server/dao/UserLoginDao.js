/*
* 用户登录、注册
 */

let dbutil = require('./DBUtil');
let log = require('../log');

// 注册用户
function insertUser(name, password, email, success) {
  let insertSql = 'insert into users(`name`, `password`, `email`) value (?, ?, ?)';
  let params = [name, password, email];
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(insertSql, params, function (error, result) {
    if (error == null) {
      success(result)
    } else {
	  log('/registered 接口异常, 用于注册新用户', 'login.log')
    }
  })
  connection.end();
}

// 查找email是否存在
function queryEmail(email, success) {
  let querySql = 'select email from users where email = ?';
  let params = [email];
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(querySql, params, function (error, result) {
    if (error == null) {
      success(result);
    } else {
	  log('/queryEmail 接口异常, 用户查找是否存在emial' + error, 'login.log')
    }
  })
  connection.end();
}

// 用户登录
function loginInformation (email, password, success) {
  let selectSql = 'select * from users where email = ? and password = ?';
  let params = [email, password];
  let connection = dbutil.createConnection();
  connection.connect();
  connection.query(selectSql, params, function (error, result) {
    if (error === null) {
      success(result)
    } else {
	  log('/loginInformation 接口异常, 登录接口' + error, 'login.log')
    }
  })

}

module.exports.insertUser = insertUser;
module.exports.queryEmail = queryEmail;
module.exports.loginInformation = loginInformation;
