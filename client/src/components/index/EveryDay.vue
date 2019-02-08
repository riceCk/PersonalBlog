/**
* 时间：2019.1.29
* 作者：陈凯
* 描述：每日一句
*/
<template>
  <div class="every_day">
    <span @click="addEveryDay">每日一句</span>
    <div class='ql-editor' v-html="content"></div>
    <inquire-dialog :dialogVisible.sync="showDialog" @watchDialog="dialogFlag"/>
  </div>
</template>

<script>
  import api from '../../api/index'
  import InquireDialog from './InquireEveryDayDialog'
  export default {
    components: {
	  InquireDialog
    },
    data () {
      return {
		content: '',
		showDialog: false
	  }
    },
    created () {
      this.getEvery()
    },
    methods: {
	  addEveryDay () {
	    this.showDialog = true
      },
	  dialogFlag (value) {
	    this.showDialog = value
      },
      getEvery () {
		api.getInquireEveryDay().then(res => {
		  let { data } = res
		  if (data.msg) {
			this.content = data.list[0].content
		  }
		})
      }
    }
  }
</script>

<style scoped>

</style>
