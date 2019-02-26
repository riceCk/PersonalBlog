/**
* 时间：2019-1-30
* 作者：陈凯
* 描述：最近热门
*/
<template>
  <div class="right-module right-hot">
    <h3>最近热门</h3>
    <ul>
      <li v-for="(item, index) in hotList" :key="index">
        <router-link :to="{name: 'detail', query: {id: item.id}}">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import api from '../../api/index'

  export default {
    data() {
      return {
        hotList: ''
      }
    },
    created () {
      this.getHotBlog()
    },
    methods: {
      getHotBlog() {
        api.queryHotBog().then(res => {
          let { data } = res
          this.hotList = data.list
        })
      }
    }
  }
</script>

<style scoped>

</style>
