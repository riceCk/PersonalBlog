/**
* 时间：2019.2.16
* 作者：陈凯
* 描述：看板娘
*/
<template>
  <div id="landlord">
    <div class="message" style="opacity:0"></div>
    <canvas id="live2d" width="280" height="250" class="live2d"></canvas>
    <div class="hide-button">隐藏</div>
  </div>
</template>

<script>
  import '../../api/live2d/js/message.js'
  export default {
    data () {
      return {
      }
    },
     created () {
     }
  }
</script>

<style>
  @import '../../api/live2d/css/live2d.css';
</style>
