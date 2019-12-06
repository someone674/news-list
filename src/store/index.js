import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import myPlugin from '../plugins/myPlugin'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login
  },
  // 发布环境以外开启严格模式
  strict: process.env.NODE_ENV !== 'production',

  // 添加插件
  plugins: [
    myPlugin
  ]
})
