/**
* 时间：2019-1-30
* 作者：陈凯
* 描述：随机标签云
*/
<template>
  <div class="right-module right-tag">
    <div>随机标签云</div>
    <a href="" :style="{color: randomColor, fontSize: randomSize}">asd</a>
  </div>
</template>

<script>
  export default {
    computed: {
      randomColor () {
        let red = Math.random() * 255;
        let green = Math.random() * 255;
        let blue = Math.random() * 255;
        return `rgb(${red}, ${green}, ${blue})`
      },
      randomSize () {
        let size = (Math.random() * 20 + 12) + 'px'
        return size
      }
    }
  }
</script>

<style scoped>

</style>
