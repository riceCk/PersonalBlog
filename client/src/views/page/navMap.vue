/**
* 时间：2019.1.31
* 作者：陈凯
* 描述：地图导航
*/
<template>
  <div class="nav_map">
    <div class="tag_list">
      <h1>标签云</h1>
      <ul>
        <router-link to="/" tag="li">正则表达式1</router-link>
        <router-link to="/" tag="li">正则表达式2</router-link>
        <router-link to="/" tag="li">正则表达式3</router-link>
        <router-link to="/" tag="li">正则表达式4</router-link>
        <router-link to="/" tag="li">正则表达式56</router-link>
        <router-link to="/" tag="li">正则表达式6</router-link>
        <router-link to="/" tag="li">正则表达式7</router-link>
        <router-link to="/" tag="li">正则表达式</router-link>
        <router-link to="/" tag="li">正则表达式</router-link>
        <router-link to="/" tag="li">正则表达式</router-link>
        <router-link to="/" tag="li">正则表达式</router-link>
        <router-link to="/" tag="li">正则表达式</router-link>
        <router-link to="/" tag="li">正则表达式</router-link>
        <router-link to="/" tag="li">正则表达式</router-link>
        <router-link to="/" tag="li">正则表达式</router-link>
        <router-link to="/" tag="li">正则表达式</router-link>
        <router-link to="/" tag="li">正则表达式</router-link>
        <router-link to="/" tag="li">正则表达式</router-link>
      </ul>
    </div>
    <div class="blog_list">
      <h1>归档</h1>
      <template v-for="item in list">
        <h2 class="date-year">{{item.dateYear}}</h2>
        <ul class="archives-ul">
          <li v-for="(i, n) in item.listTitle" :key="n">
            <span>{{i.date}}</span>
            <router-link to="/">{{i.title}}</router-link>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        list: []
      }
    },
    created () {
      this.$http.get('http://archives.cn').then(res => {
        let { list } = res.data
        this.list = list
      })
    }
  }
</script>

<style lang="scss">
  @import '../../assets/css/navMap/index';
</style>
