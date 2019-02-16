/**
* 时间：2019.1.31
* 作者：陈凯
* 描述：关于我
*/
<template>
  <div class="content about">
    <description />
    <ContentRight />
  </div>
</template>

<script>
  import Description from '../../components/about/Description'
  import ContentRight from '../../components/index/ContentRight'

  export default {
    components: {
	  Description,
	  ContentRight
    }
  }
</script>

<style lang="scss">
  @import '../../assets/css/about/about';
</style>
