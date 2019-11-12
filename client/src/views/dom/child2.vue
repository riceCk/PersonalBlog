<template>
  <!--<div class="center">-->
    <!--2.我的年龄是：{{age}}岁-->
    <!--<button @click="send">我给3组件赋值</button>-->
  <!--</div>-->
  <div>
    <div class="center">
      <p>bb: {{bb}}</p>
      <p>child2的￥attrs: {{$attrs}}</p>
      <button @click="reduce2">组件2减dd</button>
    </div>
    <child3 v-bind="$attrs"></child3>
  </div>
</template>

<script>
  import Child3 from './child3';

  export default {
    name: 'demo2',
    components: {
      Child3
    },
    props: {
      Event: {},
      bb: {
        type: Number
      }
    },
    data () {
      return {
        age: 18
      }
    },
    methods: {
      // send () {
      //   this.Event.$emit('message-b', this.age);
      // },
	  reduce2 () {
        this.$emit('reduce');
      }
    }
  }
</script>
