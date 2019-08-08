import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/main.css'
import './assets/css/defalut/default.scss'
import './plugins/element.js'
import mintUi from 'mint-ui'
import  VueQuillEditor from 'vue-quill-editor'
// require styles 引入样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import axios from 'axios'
import qs from 'qs'
import md5 from 'js-md5'
import './mock/index.js'
Vue.prototype.$http = axios
Vue.prototype.$qs = qs
Vue.prototype.$md5 = md5

Vue.config.productionTip = false

Vue.directive('auth', {
  inserted: (el, binding) => {
    console.log(el, 'el')
    console.log(binding, 'binding')
  }
})

new Vue({
  router,
  store,
  mintUi,
  VueQuillEditor,
  render: h => h(App)
}).$mount('#app')
