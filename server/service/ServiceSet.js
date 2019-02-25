let everyDayDao = require('../dao/EveryDayDao');
let articleDao = require('../dao/ArticleDao');
let TagsDao = require('../dao/TagsDao');
let TagBlogMappingDao = require('../dao/TagBlogMappingDao');

function insertEveryDay (content, ctime, success) {
  everyDayDao.insertEveryDay(content, ctime, success);
}
function selectEveryDay (success) {
  everyDayDao.selectEveryDay(success);
}


function insertArticle (title, content, tags, views, ctime, utime, success) {
  articleDao.insertArticle(title, content, tags, views, ctime, utime, success);
}
function queryBlogByPage(pageNum, pageSize, success) {
  articleDao.queryBlogByPage(pageNum, pageSize, success);
}
function queryBlogTotal (success) {
  articleDao.queryBlogTotal(success);
}
function queryBlogByDetail (id, success) {
  articleDao.queryBlogByDetail(id, success);
}
function queryBlogByNext (id, success) {
  articleDao.queryBlogByNext(id, success);
}
function queryBlogByPrevious (id, success) {
  articleDao.queryBlogByPrevious(id, success);
}
function queryAllBlog (success) {
  articleDao.queryAllBlog(success);
}


function insertTag (tag, ctime, utime, success) {
  TagsDao.insertTag(tag, ctime, utime, success);
}
function queryTag (tag, success) {
  TagsDao.queryTag (tag, success);
}
function queryAllTag (success) {
  TagsDao.queryAllTag(success);
}


function insertTagBlogMapping (tagId, blogId, ctime, utime, success) {
  TagBlogMappingDao.insertTagBlogMapping(tagId, blogId, ctime, utime, success)
}
module.exports.insertEveryDay = insertEveryDay;
module.exports.selectEveryDay = selectEveryDay;
module.exports.insertArticle = insertArticle;
module.exports.insertTag = insertTag;
module.exports.queryTag = queryTag;
module.exports.insertTagBlogMapping = insertTagBlogMapping;
module.exports.queryBlogByPage = queryBlogByPage;
module.exports.queryBlogTotal = queryBlogTotal;
module.exports.queryBlogByDetail = queryBlogByDetail;
module.exports.queryBlogByNext = queryBlogByNext;
module.exports.queryBlogByPrevious = queryBlogByPrevious;
module.exports.queryAllTag = queryAllTag;
module.exports.queryAllBlog = queryAllBlog;
