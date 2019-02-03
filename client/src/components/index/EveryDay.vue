/**
* 时间：2019.1.29
* 作者：陈凯
* 描述：每日一句
*/
<template>
  <div class="every_day">
    <span @click="addEveryDay">每日一句</span>
    <div v-html="content"></div>
  </div>
</template>

<script>
  import api from '../../api/index'
  export default {
    data () {
      return {
		content: '',
        dialogEveryDay: false
	  }
    },
    created () {
      api.getInquireEveryDay().then(res => {
		let { data } = res
        if (data.msg) {
          this.content = data.list[0].content
        }
      })
    },
    methods: {
	  addEveryDay () {
	    this.dialogEveryDay = true
	    console.log(123)
      }
    }
  }
</script>

<style scoped>

</style>
