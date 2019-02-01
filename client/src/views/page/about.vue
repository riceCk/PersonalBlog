/**
* 时间：2019.1.31
* 作者：陈凯
* 描述：关于我
*/
<template>
  <div class="content_left about">
    <description />
    <blog-comments title="关于" />
  </div>
</template>

<script>
  import Description from '../../components/about/Description'
  import BlogComments from '../../components/about/BlogComments'

  export default {
    components: {
	  Description,
	  BlogComments
    }
  }
</script>

<style lang="scss">
  @import '../../assets/css/about/about';
</style>
