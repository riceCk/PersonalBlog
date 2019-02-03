<template>
  <div>
    <div class="edit_container">
      <quill-editor
              v-model="infoForm.a_content"
              ref="myQuillEditor"
              class="editer">
      </quill-editor>
    </div>
  </div>
</template>

<script>
  import {quillEditor} from 'vue-quill-editor' //调用编辑器
  export default {
	components: {
	  //使用编辑器
	  quillEditor
	},
	data() {
	  return {
		infoForm: {
		  a_content: '',
		},
	  }
	},
	computed: {
	  editor() {
		return this.$refs.myQuillEditor.quill
	  }
	},
  }
</script>
