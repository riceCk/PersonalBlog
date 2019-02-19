let express = require('express');
let globalConfig = require('./config.js');
let log = require('./log.js');
let loader = require('./loader');
let app = new express();


app.use(express.static('.' + globalConfig.page_path));

app.post('/editEveryDay', loader.get('/editEveryDay'));
app.get('/inquireEveryDay', loader.get('/inquireEveryDay'));
app.post('/insertArticle', loader.get('/insertArticle'))

app.listen(globalConfig.port, () => {
  log('服务器已启动', 'server')
  console.log('服务器已启动');
})
