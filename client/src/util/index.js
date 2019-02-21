export default {
  getCurDate (dateTime) {
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
}
