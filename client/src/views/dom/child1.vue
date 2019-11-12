<template>
  <div>
    <div class="center">
      <p>aa:{{aa}}</p>
      <p>child1的￥attrs:{{$attrs}}</p>
      <button @click="reduce1">组件1减dd</button>
      <!--1.我的名字是：{{name}}-->
      <!--<button @click="send">我给3组件赋值</button>-->
    </div>
    <child2 v-bind="$attrs" v-on="$listeners"></child2>
  </div>

</template>

<script>
  import Child2 from './child2';
  export default {
    name: 'demo1',
    components: {
      Child2
    },
    props: {
      Event: {},
      aa: {
        type: Number
      },
    },
    data () {
      return {
        name: '帅比凯'
      }
    },
    methods: {
      // send() {
      //   console.log(this.Event, 123)
      //   this.Event.$emit('message-a', this.name);
      // },
      reduce1 () {
        this.$emit('reduce');
      }
    }
  }
</script>
