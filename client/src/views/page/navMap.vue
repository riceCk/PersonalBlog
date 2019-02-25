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
        <router-link to="/" tag="li" v-for="(item, index) in tags" :key="index">{{item.tag}}</router-link>
      </ul>
    </div>
    <div class="blog_list">
      <h1>归档</h1>
      <template v-for="item in list">
        <h2 class="date-year">{{item.dateYear}}</h2>
        <ul class="archives-ul">
          <li v-for="(i, n) in item.listTitle" :key="n">
            <span>{{new Date(i.ctime).getMonth() + 1 + '-' + new Date(i.ctime).getDate()}}</span>
            <router-link :to="{name: 'detail', query: {id: i.id}}">{{i.title}}</router-link>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
  import api from '../../api/index'
  import util from '../../util/index'
  export default {
    data () {
      return {
        list: [],
        tags: []
      }
    },
    created () {
      this.getTags()
    },
    methods: {
      getTags () {
        api.queryRandomTags().then(res => {
          let { data } = res
          this.tags = data.list
        })
        api.queryAllBlog().then(res => {
          let { data } = res
          let list = [
			{
			  "dateYear": 2019,
			},
			{
			  "dateYear": 2018,
			}
		  ]
		  list.map(v => {
			data.list.map(item => {
			  let dateYear = new Date(item.ctime).getFullYear()
               if (v.dateYear === dateYear) {
                if (!v.listTitle) {
                  v.listTitle = []
                }
                v.listTitle.push(item)
              }
			})
		  })
          this.list = list
        })
      }
    }
  }
</script>

<style lang="scss">
  @import '../../assets/css/navMap/index';
</style>
