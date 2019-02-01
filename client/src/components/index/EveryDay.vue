/**
* 时间：2019.1.29
* 作者：陈凯
* 描述：每日一句
*/
<template>
  <div class="every_day">
    <span>每日一句</span>
    <div v-html="content"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        content: '<p>我反复说过，真正的幸福是不能用语言描绘的，它只能用心体会，感受越深就越无法描述，因为真正的幸福不是一系列事实的积累，而是一种状态的持续。</p>\n' + '<p> ——卢梭 《忏悔录》</p>'
      }
    }
  }
</script>

<style scoped>

</style>
