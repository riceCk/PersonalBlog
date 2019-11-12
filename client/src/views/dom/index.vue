<template>
  <div class="container">
    <button style="backgroundColor: lightgray" @click="reduce">减dd</button>
    <child1 :aa="aa" :bb="bb" :cc="cc" :dd="dd" @reduce="reduce"></child1>
    <!--<p>我的count: {{count}}</p>-->
    <!--<p>doubleCount: {{doubleCount}}</p>-->
    <!--<button @click="actIncrement">增加</button>-->
    <!--<button @click="actReduce">减少</button>-->
    <!--<child1 :Event="Event"></child1>-->
    <!--<child2 :Event="Event"></child2>-->
    <!--<child3 :Event="Event"></child3>-->
  </div>
</template>

<script>
  import Vue from 'vue';
  import Child1 from './child1';
  import Child2 from './child2';
  import Child3 from './child3';
  import {mapState, mapActions, mapGetters} from 'vuex'

  const Event = new Vue();

  export default {
	components: {
	  Child1,
	  Child2,
	  Child3
	},
	data() {
	  return {
		Event: Event,
        aa: 1,
        bb: 2,
        cc: 3,
        dd: 100
	  }
	},
	computed: {
	  ...mapState({count: state => state.count}),
	  ...mapGetters({doubleCount: 'doubleCount'}),
	},
    methods: {
	  ...mapActions({actIncrement: 'actIncrement', actReduce: 'actReduce'}),
	  reduce () {
	    this.dd--
      }
	}
  }
</script>
