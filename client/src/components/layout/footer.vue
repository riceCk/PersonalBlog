/**
* 时间：2019-2-16
* 作者：陈凯
* 描述：尾部
*/
<template>
  <div class="footer" id="footer">
    <footer>
      <div class="footer-left">
        <span>© 1995-2019 · Code & Theme By</span>
        <router-link :to="{name: 'insertArticle'}">rice</router-link>
      </div>
      <div class="footer-right">
        <router-link to="/">苏ICP备19015853号 </router-link>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  @import '../../assets/css/layout/footer';

</style>
