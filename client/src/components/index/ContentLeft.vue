/**
* 时间：2019.1.29
* 作者：陈凯
* 描述：内容左侧
*/
<template>
  <div class="content_left">
    <every-day />
    <div class="article_list">
      <div class="article" v-for="(item, index) in list" :key="index">
        <router-link to="/" class="article_title">{{item.title}}</router-link>
        <div class="article_foot">发布于{{getCurDate(item.ctime)}} | 浏览（{{item.views}}） | Tags: es {{item.tags}}</div>
        <p class="article_content" v-html="item.content">

        </p>
      </div>
    </div>
    <div class="block">
      <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="pageInfo.pageNum"
              :page-sizes="[5, 10, 20, 40]"
              :page-size="pageInfo.pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total=total>
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import EveryDay from './EveryDay'
  import api from '../../api/index'
  import util from '../../util/index'

  export default {
    components: {
	  EveryDay,
    },
    data() {
      return {
		total: 0,
		pageInfo: {
		  pageSize: 5, // 每次显示的内容
		  pageNum: 1  // 页数
        },
        list: []
      }
    },
    created () {
	  this.getPage()
    },
	computed: {

    },
    methods: {
	  getCurDate(dateTime) {
		return util.getCurDate(dateTime)
	  },
	  getPage (){
		api.getBlogByPage(this.pageInfo).then(res => {
		  let { data } = res
          this.list = data.list
        })
	  },
	  handleSizeChange(val) {
		console.log(`每页 ${val} 条`);
	  },
	  handleCurrentChange(val) {
		console.log(`当前页: ${val}`);
	  }
    }
  }
</script>

<style scoped>

</style>
