/**
* 时间：2019.1.29
* 作者：陈凯
* 描述：内容左侧
*/
<template>
  <div class="content_left">
    <every-day />
    <article-list />
    <article-list />
    <article-list />
    <article-list />
    <article-list />
  </div>
</template>

<script>
  import EveryDay from './EveryDay'
  import ArticleList from './ArticleList'

  export default {
    components: {
	  EveryDay,
	  ArticleList
    }
  }
</script>

<style scoped>

</style>
