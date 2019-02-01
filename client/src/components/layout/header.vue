/**
* 时间：2019.1.29
* 作者：陈凯
* 描述：头部
*/
<template>
  <header class="header">
    <div class="container">
      <router-link :to="{name: 'home'}" class="title">我的个人博客 | 技术博客</router-link>
      <ul class="menu">
        <router-link tag="li" :to="{name: 'home'}">首页</router-link>
        <router-link tag="li" :to="{name: 'navMap'}">地图</router-link>
        <router-link tag="li" :to="{name: 'about'}">关于</router-link>
        <router-link tag="li" :to="{name: 'guestBook'}">留言</router-link>
      </ul>
      <div class="search_bar">
        <input type="text" placeholder="输入关键词查找">
        <button>搜索</button>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  @import '../../assets/css/layout/header';
</style>
