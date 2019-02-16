/**
* 时间：2019-1-30
* 作者：陈凯
* 描述：最近评论
*/
<template>
  <div class="right-module right-evaluation">
    <h3>最新评论</h3>
    <ul>
      <li v-for="(item, index) in 5" :key="index">
        <div>
          <span>这是用户名</span>
          <span class="pull_right">这是时间</span>
          <p>我反复说过，真正的幸福是不能用语言描绘的，它只能用心体会，感受越深就越无法描述</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>

</style>
