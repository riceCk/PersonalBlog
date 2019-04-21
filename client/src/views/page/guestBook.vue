/**
* 时间：2019.2.1
* 作者：陈凯
* 描述：留言
*/
<template>
  <div class="content ">
    <div class="content_left guestBook">
      <div class="description">
        <p>  2年部队经验养成良好的时间观 念以及对细节的把握，能够承受一 定抗压环境。热爱前端开发，平时 经常阅览简书、CSDN等论坛，不 定期发布项目到GithHb分享并收集 业界大佬的GitHub项目学习。</p>
        <p style="color: red">欢迎</p>
      </div>
      <blog-comments title="留言" />
    </div>
    <content-right />
  </div>
</template>

<script>
  import BlogComments from '../../components/about/BlogComments'
  import ContentRight from '../../components/index/ContentRight'
  export default {
    components: {
	  BlogComments,
	  ContentRight
    }
  }
</script>

<style lang="scss">
  @import '../../assets/css/guesstBook/guestBook';
</style>
