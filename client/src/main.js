import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/main.css'
import './assets/css/default.scss'
import './plugins/element.js'
import  VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import axios from 'axios'
import qs from 'qs'
Vue.prototype.$http = axios
Vue.prototype.$qs = qs

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueQuillEditor,
  render: h => h(App)
}).$mount('#app')
