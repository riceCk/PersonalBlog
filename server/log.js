/**
 * 日志的处理
 */
let fs = require('fs');
let globalConfig = require('./conf/config.js');
let moment = require('moment');

function nowDate () {
  let formatDate = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
  return formatDate + ' '
}

function log (data, targetFile) {
  let logTxt = nowDate() + data + '\n';
  let fileName;
  if (targetFile) {
	fileName = './' + globalConfig.log_path + targetFile
  } else {
	fileName = './' + globalConfig.log_path + globalConfig.log_name
  }
  fs.appendFile(fileName, logTxt, {flag: 'a'}, function() {})
}
module.exports = log;
