/**
* 时间：2019.1.29
* 作者：陈凯
* 描述：内容右侧
*/
<template>
  <div class="content_right">
    <right-tag />
    <right-hot />
    <right-evaluation />
    <right-link />
  </div>
</template>

<script>
  import RightTag from './RightTag'
  import RightHot from './RightHot'
  import RightEvaluation from './RightEvaluation'
  import RightLink from './RightLink'
  export default {
    components: {
	  RightTag,
	  RightHot,
	  RightEvaluation,
	  RightLink
    }
  }
</script>

<style scoped>

</style>
