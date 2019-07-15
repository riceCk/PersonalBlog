
export default {
  getCurDate(dateTime) {
	let date = new Date(dateTime);
	let toDay = new Date;
	let difference = toDay.getTime() - date.getTime();
	if (difference < 86400000) {
	  difference = difference / 1000;
	  if (difference > 3600) {
		return parseInt(difference / 60 / 60) + '小时前'
	  } else if (difference > 60) {
		return parseInt(difference / 60) + '分钟前'
	  } else {
		return parseInt(difference) + '秒前'
	  }
	}
	let y = date.getFullYear();
	let m = add_zero(date.getMonth() + 1);
	let r = add_zero(date.getDate());
	let h = add_zero(date.getHours());
	let f = add_zero(date.getMinutes());
	let s = add_zero(date.getSeconds());

	function add_zero(temp) {
	  if (temp < 10) return '0' + temp
	  else return temp
	}

	return `${y}-${m}-${r} ${h}:${f}:${s}`
  },
  // 重置一个有序的数组
  shuffle(array) {
	let currentIndex = array.length;
	let temporaryValue; // 用来存放数据的中间变量
	let randomIndex;    // 随机index值
	while (0 !== currentIndex) {
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex -= 1;
	  temporaryValue = array[currentIndex];
	  array[currentIndex] = array[randomIndex];
	  array[randomIndex] = temporaryValue
	}
	return array
  },
  // 防抖函数
  debounce(fn, delay = 1000) {
    let timer;
    return function () {
      let args = arguments;
      if (timer) {
        clearTimeout(timer);
	  }
	  timer = setTimeout(() => {
	    fn.apply(this, args);
	  }, delay);
	}
  }
}
