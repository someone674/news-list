import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logined: false
  },
  getters: {
    login: state => {
      return state.logined
    }
  },
  mutations: {
    login (state) {
      state.logined = true
    }
  },
  actions: {
    login ({ commit }) {
      commit('login')
    }
  },
  modules: {

  }
})
