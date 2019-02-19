/**
* 时间：2019-2-18
* 作者：陈凯
* 描述：插入文章
*/
<template>
  <div class="insertArticle">
    <el-row>
      <span class="title">日志标题: </span>
      <div class="input">
        <el-input v-model="formData.title" placeholder="请输入日志标题" style="width: 220px"> </el-input>
      </div>
    </el-row>
    <el-row>
      <span class="title">标&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp签: </span>
      <div class="input">
        <el-input v-model="formData.tag" placeholder="请输入日志标签" style="width: 220px;"> </el-input>
      </div>
    </el-row>
    <el-row>
      <div class="edit_container">
        <quill-editor
                v-model="formData.content"
                ref="myQuillEditor"
                class="editer">
        </quill-editor>
      </div>
    </el-row>
    <el-row>
      <el-button @click="addText">提交</el-button>
    </el-row>
  </div>
</template>

<script>
  import {quillEditor} from 'vue-quill-editor' //调用编辑器
  import api from '../../api/index.js'
  export default {
	components: {
	  //使用编辑器
	  quillEditor
	},
	data() {
	  return {
		formData: {
		  title: '',
		  content: '',
          tag: ''
        },
	  }
	},
	computed: {
	  editor() {
		return this.$refs.myQuillEditor.quill
	  }
	},
    methods: {
	  addText () {
        this.formData.tag = this.formData.tag || 'all'
        let postData = this.$qs.stringify(this.formData)
        api.postEditArticle(postData).then(res => {
          let { data } = res
          if (data.status === 'success') {
            this.formData.title = ''
            this.formData.content = ''
            this.formData.tag = ''
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/navMap/insertArticle.scss';
</style>
