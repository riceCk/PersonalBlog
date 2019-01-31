/**
* 时间：2019.1.31
* 作者：陈凯
* 描述：碎片
*/
<template>
  <div class="link">
    <router-link :to="{name: 'home'}" tag="b">博客首页</router-link>
    >> {{navText}}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        navList: '',
        routerList: this.$route.name,
        routerArray: {
		  navMap: '站点地图'
        }
      }
    },
    computed: {
      navText() {
        return this.routerArray[this.routerList]
      }
    }
  }
</script>

<style scoped>

</style>
