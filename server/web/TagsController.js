/**
 * 标签接口
 */
let url = require('url');
let queryString = require('querystring');
let serviceSet = require('../service/ServiceSet');
let timeUtil = require('../util/TimeUtil');
let respUtil = require('../util/RespUtil');
let path = new Map();
let log = require('../log.js');

function queryRandomTags (request, response) {
  response.writeHead(200, respUtil.writeHead);
  serviceSet.queryAllTag(function(result) {
    result.sort(function () {
      return Math.random() > 0.5 ? true : false;
	});
	response.write(respUtil.writeResult('success', '查询成功', result));
	response.end();
  })
}
path.set("/queryRandomTags", queryRandomTags);
module.exports.path = path;
