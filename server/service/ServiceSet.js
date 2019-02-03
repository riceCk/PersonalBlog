let everyDayDao = require('../dao/EveryDayDao');

function insertEveryDay (content, ctime, success) {
  everyDayDao.insertEveryDay(content, ctime, success);
}
function selectEveryDay (success) {
  everyDayDao.selectEveryDay(success);
}
module.exports.insertEveryDay = insertEveryDay;
module.exports.selectEveryDay = selectEveryDay;
