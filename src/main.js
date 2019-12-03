import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './util/http.js'
import api from './util/api.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$http = http
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
