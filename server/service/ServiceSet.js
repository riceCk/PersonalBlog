let everyDayDao = require('../dao/EveryDayDao');
let articleDao = require('../dao/ArticleDao');

function insertEveryDay (content, ctime, success) {
  everyDayDao.insertEveryDay(content, ctime, success);
}
function selectEveryDay (success) {
  everyDayDao.selectEveryDay(success);
}

function insertArticle (title, content, tags, views, ctime, utime, success) {
  articleDao.insertArticle(title, content, tags, views, ctime, utime, success);
}
module.exports.insertEveryDay = insertEveryDay;
module.exports.selectEveryDay = selectEveryDay;
module.exports.insertArticle = insertArticle;
