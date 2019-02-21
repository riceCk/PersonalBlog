/**
* 时间：2019.1.29
* 作者：陈凯
* 描述：内容左侧
*/
<template>
  <div class="content_left">
    <every-day />
    <div class="article_list">
      <div class="article" v-for="(item, index) in articleList" :key="index">
        <router-link :to="{name: 'detail', query: {id: item.id}}" class="article_title">{{item.title}}</router-link>
        <div class="article_foot">发布于{{getCurDate(item.ctime)}} | 浏览（{{item.views}}） | Tags: {{item.tags}}</div>
        <router-link  :to="{name: 'detail', query: {id: item.id}}" class="article_content">
          {{item.content}}
        </router-link>
      </div>
    </div>
    <div class="page_tool">
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
		articleList: [],
		message: 'Hello'
      }
    },
    created () {
	  this.getPage()
    },
    computed: {
	  getCurDate() {
		return (dateTime) => util.getCurDate(dateTime)
	  },
    },
    methods: {
	  getPage (){
		api.getBlogByPage(this.pageInfo).then(res => {
		  let { data } = res;
          this.articleList  = data.list;
          this.total = data.total
        })
	  },
	  handleSizeChange(val) {
		this.pageInfo.pageSize = val;
		this.getPage();
	  },
	  handleCurrentChange(val) {
	    this.pageInfo.pageNum = val;
	    this.getPage();
	  }
    }
  }
</script>

<style scoped>

</style>
