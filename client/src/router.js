import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/default'
import Index from './views/page/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
	  redirect: '/index',
      children: [{
        path: '/index',
        name: 'index',
        component: Index
      }]
    },
  ]
})
