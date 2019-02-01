/**
* 时间：2019.2.1
* 作者：陈凯
* 描述：留言
*/
<template>
  <div class="blog_comments">
    <span class="blog_comments_msg"><b>{{title}}：</b>目前有61条留言</span>
    <div v-for="(item, index) in 10" :key="index" class="blog_comment">
      <span><b>cjh3333:</b>发布于 2019年01月31日 12:35【回复】</span>
      <div>爱豆世纪福晶科技睡大觉烦死啦交党费</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/css/about/blogCommests';
</style>
