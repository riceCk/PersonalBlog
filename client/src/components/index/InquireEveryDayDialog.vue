/**
* 时间：2019.2.3
* 作者：陈凯
* 描述：编辑每日一句弹框
*/
<template>
  <el-dialog title="编辑每日一句" :visible="dialogVisible" @close="onClose">
    <el-row class="everyDay_editor">
      <div class="edit_container">
        <quill-editor
                v-model="content"
                ref="myQuillEditor"
                class="editer">
        </quill-editor>
      </div>
    </el-row>
    <div slot="footer" class="dialog-footer">
      <el-button @click="onClose">取 消</el-button>
      <el-button type="primary" @click="addEveryDayText">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import {quillEditor} from 'vue-quill-editor' //调用编辑器
  import api from '../../api/index'

  export default {
    props: {
	  dialogVisible: {
	    type: Boolean,
        default: false
      }
    },
	components: {
	  //使用编辑器
	  quillEditor
	},
	data() {
	  return {
		content: '',
        flag: false
	  }
	},
	computed: {
	  editor() {
		return this.$refs.myQuillEditor.quill
	  },
	},
	methods: {
	  addEveryDayText () {
		if (this.content) {
		  let postData = this.$qs.stringify({content: this.content})
		  this.$confirm('确定提交编辑?', '提示', {
			confirmButtonText: '确定',
			cancelButtonText: '取消',
			type: 'warning'
		  }).then(() => {
			api.getEditEveryDay(postData).then(res => {
			  let { data } = res
              if (data.status === 'success') {
				this.$message({
				  type: 'success',
				  message: '编辑成功!'
				});
				this.$parent.getEvery()
              } else {
				this.$message({
				  type: 'info',
				  message: '编辑失败'
				});
              }
              this.onClose()
			})
		  }).catch(() => {
			this.$message({
			  type: 'info',
			  message: '取消编辑'
			});
		  });
		}
	  },
      onClose () {
	    this.content = ''
		this.$emit('update:dialogVisible', false)
      }
	}
  }
</script>

<style scoped>
  .el-button--primary {
    color: #fff;
  }
</style>
