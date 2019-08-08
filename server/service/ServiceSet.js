let everyDayDao = require('../dao/EveryDayDao');
let articleDao = require('../dao/ArticleDao');
let TagsDao = require('../dao/TagsDao');
let TagBlogMappingDao = require('../dao/TagBlogMappingDao');
let UserLoginDao = require('../dao/UserLoginDao');

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
function queryByTags (pageNum, pageSize, tag, success) {
  articleDao.queryByTags(pageNum, pageSize, tag, success);
}
function queryByTagsTotal (tag, success) {
  articleDao.queryByTagsTotal(tag, success);
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
function queryAllBlog (tag, success) {
  articleDao.queryAllBlog(tag, success);
}
function addViews (id, success) {
  articleDao.addViews(id, success);
}
function queryHotBlog(size, success) {
  articleDao.queryHotBlog(size, success);
}
function deleteBlog (id, success) {
  articleDao.deleteBlog(id, success);
}
function deleteTagBlogMapping (blogId, success) {
  articleDao.deleteTagBlogMapping(blogId, success);
}
function updateEditArticle (id ,title, content, tags, utime, success) {
  articleDao.updateEditArticle(id ,title, content, tags, utime, success)
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

// 登录注册用户集合
function insertUser (name, password, email, success) {
  UserLoginDao.insertUser(name, password, email, success);
}
// 查找是否存在邮箱
function queryEmail (email, success) {
  UserLoginDao.queryEmail(email, success);
}
// 用户登录
function loginInformation (email, password, success) {
  UserLoginDao.loginInformation(email, password, success);
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
module.exports.addViews = addViews;
module.exports.queryHotBlog = queryHotBlog;
module.exports.queryByTags = queryByTags;
module.exports.queryByTagsTotal = queryByTagsTotal;
module.exports.deleteBlog = deleteBlog;
module.exports.deleteTagBlogMapping = deleteTagBlogMapping;
module.exports.updateEditArticle = updateEditArticle;
module.exports.insertUser = insertUser;
module.exports.queryEmail = queryEmail;
module.exports.loginInformation = loginInformation; 
