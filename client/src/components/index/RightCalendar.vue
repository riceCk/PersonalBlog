<template>
  <div class="right-module right-calendar">
    <div class="calendar">
      <div class="day"></div>
      <div class="month">
        <div class="month-name">{{monthName}}</div>
      </div>
      <div class="number">{{day}}</div>
    </div>
    <div class="contain">
      <div class="caltwo">
        <div class="daytwo">{{weekdayName}}</div>
        <div class="monthtwo">{{monthName}} {{day}}</div>
      </div>
      <div class="clock">
        <div class="time hour">{{hour}}:</div>
        <div class="time min">{{minute}}:</div>
        <div class="time sec">{{sec}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
	data() {
	  return {
		day: '', // 日期
		monthName: '', //月份
		weekdayName: '',  // 周期
		hour: '',
		minute: '',
		sec: '',
		date: new Date(),
		timer: ''
	  }
	},
	mounted() {
	  this.initDate()
	},
	methods: {
	  initDate() {
		let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		let months = ["January", "Februray", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		let date = new Date();
		let weekday = date.getDay(); // 星期
		let month = date.getMonth(); // 月份
		this.weekdayName = weekdays[weekday] // 翻译
		this.day = date.getDate();  // 日期
		this.monthName = months[month]; // 翻译月份
		this.timer = setInterval(() => {
		  let date = new Date()
		  this.hour = date.getHours() > 10 ? date.getHours() : '0' + date.getHours();
		  this.minute = date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes();
		  this.sec = date.getSeconds() > 10 ? date.getSeconds() : '0' + date.getSeconds();
		}, 1000)
	  }
	},
    beforeDestroy () {
	  if (this.timer) {
	    clearInterval(this.timer)
      }
    }
  }
</script>


