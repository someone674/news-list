import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { get, post, put, patch } from './util/http.js'

Vue.config.productionTip = false

Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$put = put
Vue.prototype.$patch = patch

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
