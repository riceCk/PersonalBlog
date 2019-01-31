/**
* 时间：2019.1.31
* 作者：陈凯
* 描述：地图导航
*/
<template>
  <div class="nav_map">
    <div class="title">个人博客's SiteMap</div>
    <my-link />
    <div class="blog_list">
      <span>最新文案</span>
      <ul>
        <router-link to="/" tag="li">正则表达式入门</router-link>
        <router-link to="/" tag="li">NodeLess（一）</router-link>
        <router-link to="/" tag="li">浏览器从请求到页面渲染的各个细节</router-link>
        <router-link to="/" tag="li">vue之服务器单页面应用</router-link>
        <router-link to="/" tag="li">vue之服务器渲染初探</router-link>
        <router-link to="/" tag="li">你不知道到JavaScript系列二</router-link>
        <router-link to="/" tag="li">Git与时间简史</router-link>
        <router-link to="/" tag="li">Linux系统学习壹</router-link>
        <router-link to="/" tag="li">Node+express+mql实战——用户管理（上）</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  import MyLink from '../../components/layout/link'
  export default {
    components: {
      MyLink
    }
  }
</script>

<style lang="scss">
  @import '../../assets/css/navMap/index';
</style>
