import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/default'
import Index from './views/page/index'
import NavMap from './views/page/navMap'
import About from './views/page/about'
import GuestBook from './views/page/guestBook'
import EveryDay from './views/page/everyDay'
import InsertArticle from './components/navMap/InsertArticle'
import Detail from './views/page/blogDetail'
import Dom from './views/page/dom'
import Live from './components/live2d/live'
import Pen from './views/game/pen'

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
	  children: [
		{
		  path: '/index',
		  name: 'index',
		  component: Index
		},
		{
		  path: '/navMap',
		  name: 'navMap',
		  component: NavMap
		},
		{
		  path: '/about',
		  name: 'about',
		  component: About
		},
		{
		  path: '/live2d',
		  name: 'live2d',
		  component: GuestBook
		},
		{
		  path: '/insertArticle',
		  name: 'insertArticle',
		  component: InsertArticle
		},
		{
		  path: '/detail',
		  name: 'detail',
		  component: Detail
		}
	  ]
	},
	{
	  path: '/everyDay',
	  name: 'everyDay',
	  component: EveryDay,
	},
	{
	  path: '/pen',
	  name: 'pen',
	  component: Pen
	},
	{
	  path: '/dom',
	  name: 'dom',
	  component: Dom
	},
	{
	  path: '/live',
	  name: 'live',
	  component: Live
	}
  ]
})
