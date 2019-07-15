// 效验规则函数
Validator.prototype.strategies = {
  isNonEmpty: function (value, errorMsg) {
    if (value === '') {
      return errorMsg
	}
	return true
  },
  maxLength: function (value, length, errorMsg) {
    if (value.length > Number(length)) {
      return errorMsg
	}
	return true
  },
  checkEmail: function (value, errorMsg) {
	let reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
	if (!reg.test(value)) {
	  return errorMsg
	}
	return true
  },
  // 验证姓名
  checkName: function (value, errorMsg) {
	let reg = /^[a-zA-Z0-9_-]{4,16}$/
	if (!reg.test(value)) {
	  return errorMsg
	}
	return true
  },
  checkPs: function (value, errorMsg) {
	let reg = /^[\w_-]{6,16}$/
	if (!reg.test(value)) {
	  return errorMsg
	}
	return true
  },
}

// 效验规则外部动态添加
Validator.prototype.extend = function () {

}

// 添加校验的规则集合
Validator.prototype.add = function (data, showDom, strategyArray) {
  this.showDom.push(showDom)
  strategyArray.forEach(ele => {
	this.cache.push(() => {
      let typeArray = ele.strategy.split(':');
      let type = typeArray.shift();
      typeArray.unshift(data);
      typeArray.push(ele.errorMsg);
	  let msg = this.strategies[type].apply(this, typeArray);
	  if (msg !== true) {
	    showDom.innerText = msg
	  }
	  return msg
	})
  })
}

// 执行
Validator.prototype.start = function () {
  let flag = true;
  this.showDom.forEach(dom => {
    dom.innerText = ''
  })
  this.cache.forEach(func => {
    if (func() !== true) {
	  flag = false
	}
  })
  return flag
}

export function Validator() {
  // 缓存
  this.cache = []
  this.showDom = []
}
