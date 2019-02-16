import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/default'
import Index from './views/page/index'
import NavMap from './views/page/navMap'
import About from './views/page/about'
import GuestBook from './views/page/guestBook'
import Dom from './views/page/dom'
import EveryDay from './views/page/everyDay'

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
      }, {
		path: '/navMap',
		name: 'navMap',
		component: NavMap,
	  }, {
        path: '/about',
        name: 'about',
        component: About
      }, {
        path: '/guestBook',
        name: 'guestBook',
        component: GuestBook
      }]
    }, {
	  path: '/everyDay',
	  name: 'everyDay',
	  component: EveryDay
	}, {
      path: '/dom',
      name: 'dom',
      component: Dom
    }
  ]
})
