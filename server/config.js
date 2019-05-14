let fs = require('fs');
let globalConfig = {};
let conf = fs.readFileSync('./server.conf');
const os = require('os');
let configArr = conf.toString().split(os.EOL);
for (let i = 0; i < configArr.length; i++) {
  // globalConfig[configArr[i].split('=')[0]] = configArr[i].split('=')[1];
  let key = configArr[i].split('=')[0].trim()
  let value = configArr[i].split('=')[1]
  globalConfig[key] = value
}
module.exports = globalConfig;
