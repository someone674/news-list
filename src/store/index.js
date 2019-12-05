import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logined: false
  },
  getters: {
    login: state => {
      if (!state.logined) {
        return sessionStorage.getItem('logined')
      }
      return state.logined
    }
  },
  mutations: {
    login (state) {
      state.logined = true
      sessionStorage.setItem('logined', true)
    },
    logout (state) {
      state.logined = false
      sessionStorage.removeItem('logined')
    }
  },
  actions: {
    login ({ commit }) {
      commit('login')
    },
    logout ({ commit }) {
      commit('logout')
    }
  },
  modules: {

  }
})
