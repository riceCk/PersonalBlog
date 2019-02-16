/**
* 时间：2019-1-30
* 作者：陈凯
* 描述：随机标签云
*/
<template>
  <div class="right-module right-tag">
    <h3>标签云</h3>
    <p>
      <a v-for="i in 30" v-bind:style="{color:randomColor}">sdaf</a>
    </p>

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
