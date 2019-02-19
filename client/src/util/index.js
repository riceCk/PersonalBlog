export default {
  getCurDate (dateTime) {
    let date = new Date(dateTime);
	let y = date.getFullYear();
    let m = add_zero(date.getMonth() + 1);
    let r = add_zero(date.getDate());
    let h = add_zero(date.getHours());
    let f = add_zero(date.getMonth());
    let s = add_zero(date.getSeconds());
	function add_zero(temp) {
	  if (temp < 10) return '0' + temp
	  else return temp
	}
	return `${y}-${m}-${r} ${h}:${f}:${s}`
  },
}
