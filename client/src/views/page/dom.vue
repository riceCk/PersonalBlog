<template>
  <div>
    <el-row class="warp">
      <!--
      Form 组件提供了表单验证的功能，只需要通过 rule 属性传入约定的验证规则，并 Form-Item 的 prop 属性设置为需校验的字段名即可。具体可以参考官网：http://element.eleme.io/#/zh-CN/component/form
      -->
      <el-col :span="20" class="warp-main">
        <el-form ref="infoForm" :model="infoForm" :rules="rules" label-width="120px">
          <el-form-item label="标题" prop="a_title">
            <el-input v-model="infoForm.a_title"></el-input>
          </el-form-item>

          <el-form-item label="来源" prop="a_source">
            <el-input v-model="infoForm.a_source"></el-input>
          </el-form-item>
          <!--使用编辑器
          -->
          <el-form-item label="详细">
            <div class="edit_container">
              <quill-editor
                      v-model="infoForm.a_content"
                      ref="myQuillEditor"
                      class="editer"
                      :options="editorOption"
                      @ready="onEditorReady($event)"
                      @blur="onEditorBlur($event)"
                      @focus="onEditorFocus($event)"
                      @change="onEditorChange($event)">
              </quill-editor>
            </div>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">确认提交</el-button>
          </el-form-item>
        </el-form>
      </el-col>


    </el-row>
  </div>
</template>

<script>
  import {quillEditor} from 'vue-quill-editor' //调用编辑器
  import api from '../../api'
  export default {
	data() {
	  return {
		infoForm: {
		  a_title: '',
		  a_source: '',
		  a_content: '',
		},
		editorOption: { // 配置多选项，空数组默认全部
		  // modules: {
			// // toolbar: [
			// //   ['bold', 'italic', 'underline', { 'color': [] }],        // toggled buttons
			// //   ['list ', 'blockquote',{ 'font': [] }, { 'size': ['small', false, 'large', 'huge'] }, { 'header': [1, 2, 3, 4, 5, 6, false] }],
			// //   ['blockquote', 'code-block', 'code-block', { 'background': [] }, 'link'],
			// //   ['indent', 'image']
			// // ]
		  // }
		},
		//表单验证
		rules: {
		  a_title: [
			{required: true, message: '请输入标题', trigger: 'blur'}
		  ],
		  a_content: [
			{required: true, message: '请输入详细内容', trigger: 'blur'}
		  ]
		},
	  }
	},
	computed: {
	  editor() {
		return this.$refs.myQuillEditor.quill
	  }
	},
	mounted() {
	  //初始化
	},
	methods: {
	  onEditorReady(editor) {
	  },
	  onEditorBlur(editor) {//失去焦点事件
	  },
	  onEditorFocus(editor) {//获得焦点事件
	  },
	  onEditorChange(editor) {//内容改变事件
	  },
	  onSubmit() {
		//提交
		//this.$refs.infoForm.validate，这是表单验证
		this.$refs.infoForm.validate((valid) => {
		  if (valid) {
			let postData = this.$qs.stringify(this.infoForm)
			api.getEditEveryDay(postData).then(res => {
			  console.log(res)
            })
		  }
		});
	  }
	},
	components: {
//使用编辑器
	  quillEditor
	}
  }
</script>
