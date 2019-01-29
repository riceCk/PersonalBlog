let express = require('express');
let globalConfig = require('./config.js');
let app = new express();

app.use(express.static('.' + globalConfig.page_path));

app.listen(globalConfig.port, () => {
  console.log('服务器已启动');
})
