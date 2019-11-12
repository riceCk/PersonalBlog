/**
 * 连接数据库的配置项
 */
let mysql = require('mysql');
let globalConfig = require('../conf/config');
function createConnection () {
  let connection = mysql.createConnection(globalConfig.database)
  return connection;
}
module.exports.createConnection = createConnection;
