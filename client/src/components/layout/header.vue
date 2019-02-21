/**
* 时间：2019.1.29
* 作者：陈凯
* 描述：头部
*/
<template>
  <header class="header">
    <div class="container" id="container">
      <router-link to="/" class="title">rice博客 | 技术博客</router-link>
      <ul class="menu" >
        <router-link tag="li" :to="{name: 'home'}">首页</router-link>
        <router-link tag="li" :to="{name: 'navMap'}">地图</router-link>
        <router-link tag="li" :to="{name: 'about'}">关于</router-link>
        <router-link tag="li" :to="{name: 'live2d'}">留言</router-link>
      </ul>
      <div class="media-nav" @click="onMenu">
        <div class="nav-btn">Menu</div>
      </div>
    </div>
    <transition name="menuMotion">
      <div class="nav-btn-active" id="nav-btn-active" v-show="menuFlag">
        <ul class="menu-new" @click="onMenu">
          <router-link tag="li" :to="{name: 'home'}">首页</router-link>
          <router-link tag="li" :to="{name: 'navMap'}">地图</router-link>
          <router-link tag="li" :to="{name: 'about'}">关于</router-link>
          <router-link tag="li" :to="{name: 'live2d'}">留言</router-link>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script>
  export default {
    data() {
      return {
		menuFlag: false
      }
    },
    methods: {
	  onMenu () {
        this.menuFlag = !this.menuFlag
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/css/layout/header';
  .menuMotion-enter,
  .menuMotion-leave-to{
    height: 0;
  }
  .menuMotion-enter-to,
  .menuMotion-leave{
    height: 164px;
  }
  .menuMotion-enter-active,
  .menuMotion-leave-active{
    transition: all .3s;
  }
</style>
