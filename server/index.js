let express = require('express');
let globalConfig = require('./config.js');
let log = require('./log.js');
let loader = require('./loader');
let app = new express();
const path = require('path');
const history = require('connect-history-api-fallback');

app.use(history());
app.use(express.static(path.resolve(__dirname, `..${globalConfig.dist}`)));

app.post('/editEveryDay', loader.get('/editEveryDay'));
app.get('/inquireEveryDay', loader.get('/inquireEveryDay'));
app.post('/insertArticle', loader.get('/insertArticle'));
app.get('/queryBlogByPage', loader.get('/queryBlogByPage'));
app.get('/queryBlogByDetail', loader.get('/queryBlogByDetail'));
app.get('/queryBlogByLimit', loader.get('/queryBlogByLimit'));
app.get('/queryRandomTags', loader.get('/queryRandomTags'));
app.get('/queryAllBlog', loader.get('/queryAllBlog'));
app.get('/queryHotBlog', loader.get('/queryHotBlog'));
app.get('/queryByTags', loader.get('/queryByTags'));
app.get('/deleteBlog', loader.get('/deleteBlog'));
app.post('/updateEditArticle', loader.get('/updateEditArticle'));
app.post('/testInterface', loader.get('/testInterface'));
app.post('/registered', loader.get('/registered'));
app.get('/queryEmail', loader.get('/queryEmail'));
app.post('/login', loader.get('/login'));

app.listen(globalConfig.port, () => {
    log('服务器已启动', 'server')
    console.log('服务器已启动');
})
