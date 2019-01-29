/**
* 时间：2019.1.29
* 作者：陈凯
* 描述：首页
*/
<template>
  <div class="content">
    <content-left />
    <content-right />
  </div>
</template>

<script>
  import ContentLeft from '../../components/index/ContentLeft'
  import ContentRight from '../../components/index/ContentRight'

  export default {
    components: {
	  ContentLeft,
	  ContentRight
    }
  }
</script>

<style lang="scss">
  @import '../../assets/css/index/index';
</style>
