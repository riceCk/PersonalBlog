<template>
  <!--<div class="center">我的名字是：{{name}}, 今年{{age}}岁</div>-->
  <div class="center">
    <p>child3的$attrs: {{$attrs}}</p>
  </div>
</template>

<script>
  export default {
    name: 'demo3',
    props: {
      Event: {},
      dd: {}
    },
    data () {
      return {
        name: '',
        age: ''
      }
    },
    mounted () {
      // this.Event.$on('message-a', name => {
      //   this.name = name
      // })
      // this.Event.$on('message-b', age => {
      //   this.age = age
      // })
    }
  }
</script>
