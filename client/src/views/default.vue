/**
* 时间：2019.1.29
* 作者：陈凯
* 描述：主页模板
*/
<template>
  <div class="layout-default">
    <my-header />
    <router-view></router-view>
    <my-footer />
  </div>
</template>

<script>
  import MyHeader from '../components/layout/header'
  import MyFooter from '../components/layout/footer'

  export default {
    components: {
	  MyHeader,
	  MyFooter
    }
  }
</script>

<style lang="scss">
  @import '../assets/css/default.scss';
</style>
