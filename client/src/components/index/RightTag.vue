/**
* 时间：2019-1-30
* 作者：陈凯
* 描述：随机标签云
*/
<template>
  <div class="right-module right-tag">
    <h3>标签云</h3>
    <p>
      <a v-for="(item, index) in tags" :key="index"
         href=''
         :style="{color: randomColor(), fontSize: randomSize(), cursor: 'pointer'}"
         @click="clickTags(item.tag)"
      >
        {{item.tag}}
      </a>
    </p>
  </div>
</template>

<script>
  import api from '../../api/index'
  export default {
    data () {
      return {
        tags: []
      }
    },
    created () {
      this.getTags();
    },
    computed: {
    },
    methods: {
      getTags () {
        api.queryRandomTags().then(res => {
         let { data } = res
          this.tags = data.list
        })
      },
	  randomColor () {
		let red = Math.random() * 255;
		let green = Math.random() * 255;
		let blue = Math.random() * 255;
		return `rgb(${red}, ${green}, ${blue})`
	  },
	  randomSize () {
		let size = (Math.random() * 20 + 12) + 'px'
		return size
	  },
	  clickTags(tag) {
		if (!tag) {
		  return
		}
		this.$router.push({
		  path: `/index/?tag=${tag}`,
		})
      }
    }
  }
</script>

<style scoped>

</style>
