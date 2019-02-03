let moment = require('moment');

function getNow () {
  let formatDate = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
  return formatDate
}
module.exports.getNow = getNow;
