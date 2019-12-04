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
    },
    logout (state) {
      state.logined = false
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
