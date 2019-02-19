/**
* 时间：2019-2-18
* 作者：陈凯
* 描述：插入文章
*/
<template>
  <div class="insertArticle">
    <el-row>
      <el-col :span="3" class="title">
        <span>日志标题: </span>
      </el-col>
      <el-col :span="8">
        <el-input v-model="formData.name" placeholder="请输入日志标题"> </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="3" class="title">
        <span>标&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp签: </span>
      </el-col>
      <el-col :span="8">
        <el-input v-model="formData.tag" placeholder="请输入日志标题"> </el-input>
      </el-col>
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
		  name: '',
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
        let postData = this.$qs.stringify(this.formData)
        // api.getEditEveryDay(postData, res => {
          // console.log(res)
        // })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/navMap/insertArticle.scss';
</style>
