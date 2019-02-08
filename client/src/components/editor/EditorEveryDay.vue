<template>
  <div class="everyDay_editor">
    <el-row>
      <div class="edit_container">
        <quill-editor
          v-model="content"
          ref="myQuillEditor"
          class="editer">
        </quill-editor>
      </div>
    </el-row>
    <el-row>
      <el-button @click="addEveryDayText">提交</el-button>
    </el-row>
  </div>
</template>

<script>
  import {quillEditor} from 'vue-quill-editor' //调用编辑器
  import api from '../../api/index'
  export default {
	components: {
	  //使用编辑器
	  quillEditor
	},
	data() {
	  return {
        content: '',
	  }
	},
	computed: {
	  editor() {
		return this.$refs.myQuillEditor.quill
	  }
	},
	methods: {
	  addEveryDayText () {
	    if (this.content) {
		  let postData = this.$qs.stringify({content: this.content})
		  api.getEditEveryDay(postData, res => {
		    console.log(res)
          })
        }
      }
    }
  }
</script>
