/**
* 时间：2019.2.1
* 作者：陈凯
* 描述：留言
*/
<template>
  <div class="content_left guestBook">
    <div class="description">
      <p>欢迎，BAT大牛经验指导-让你迅速成为公司炙手可热的新星</p>
      <p style="color: red">-让你迅速成为公司炙手可热的新星</p>
      <p style="color: red">欢迎</p>
    </div>
    <blog-comments title="留言" />
  </div>
</template>

<script>
  import BlogComments from '../../components/about/BlogComments'

  export default {
    components: {
	  BlogComments
    }
  }
</script>

<style lang="scss">
  @import '../../assets/css/guesstBook/guestBook';
</style>
