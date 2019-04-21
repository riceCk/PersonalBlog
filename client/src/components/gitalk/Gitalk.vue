/**
* 时间：2019-02-21
* 作者：陈凯
* 描述：gitalk评论
*/
<template>
  <div id="gitalk-container"></div>
</template>

<script>
  import Gitalk from 'gitalk'

  export default {
		data(){
			return{
			gitalk: new Gitalk({
				clientID: "3d0c4edc859d29945f62",
				clientSecret: "2cf0b97c6b48531def871de90dfd0214386e2b40",
				repo: "gitalk",
				owner: "riceCk",
				admin: "[riceCk]",
				id: window.location.hash, // 默认为pathname,如果你也是像我这样用vue搭建的，我建议使用hash，原因具体后面会讨论到。
				distractionFreeMode: false // Facebook-like distraction free mode
			})
			}
		},
		mounted(){
			this.gitalk.render("gitalk-container");
		}
  }
</script>

<style scoped>

</style>
