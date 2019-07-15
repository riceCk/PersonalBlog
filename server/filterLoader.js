const fs = require('fs');
const globalConfig = require('./config');

const files = fs.readdirSync(globalConfig['filter_path']);
let filterSet = [];
let pathMap = new Map();

for(let i = 0; i < files.length; i++) {
  let temp = require(`./${globalConfig['filter_path']}/${files[i]}`);
  if (temp.path) {
    for(let [key, value] of temp.path) {
      if (pathMap.get(key) == null) {
        pathMap.set(key, value)
	  } else {
        throw new Error('url path异常，url:' + key);
	  }
	  filterSet.push(temp)
	}
  }
}
