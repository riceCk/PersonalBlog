/**
* 时间：2019-02-20
* 作者：陈凯
* 描述：博客详情列表
*/
<template>
  <div class="detail">
    <h2 class="detail-title">{{detailList.title}}</h2>
    <div class="detail-meta">
      发布于
      <time :datetime="detailList.utime">{{getCurDate(detailList.utime)}}</time>
      /
      <router-link to="/">{{detailList.tags}}</router-link>
    </div>
    <div class="detail-content" v-html="detailList.content"></div>
    <div class="pagination" id="pagination">
      <div @click="jumpDetail(nextData)" class="nav-nex fr">
        <span>下一篇：</span>
        <a v-if='nextData' :title="nextData.title">{{nextData.title}}</a>
        <span v-else>没有了，已经是最新文章</span>
      </div>
      <div @click="jumpDetail(previousData)" class="nav-previous fl">
        <span>上一篇：</span>
        <a v-if="previousData"  :title="previousData.title">{{previousData.title}}</a>
        <span v-else>没有了，已经是最后文章</span>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '../../api/index';
  import util from '../../util/index';

  export default {
	data() {
	  return {
		detailId: this.$route.query.id,
		detailList: '',
		previousData: '',
		nextData: ''
	  }
	},
	created() {
	  this.getPage(this.detailId)
	},
	computed: {
	  getCurDate() {
		return (dateTime) => util.getCurDate(dateTime)
	  },
	},
	methods: {
	  getPage(detailId) {
	    if (!detailId) {
		  this.$router.push({
			path: `/index`,
		  })
        }
		api.getBlogByDetail({id: detailId}).then(res => {
		  let {data} = res
		  this.detailList = data.list
		})
		api.getBlogByLimit({id: detailId}).then(res => {
		  let {data} = res;
		  this.nextData = data.list.next
          this.previousData = data.list.previous
		})
	  },
	  jumpDetail(data) {
	    if (!data) {
	      return
        }
	    this.getPage(data.id)
		this.$router.push({
		  path: `/detail/?id=${data.id}`,
		})
      }
	}
  }
</script>

<style scoped lang="scss">
  @import '../../assets/css/detail/index';
</style>
