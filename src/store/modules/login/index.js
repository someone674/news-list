const state = {
  logined: false
}

// getters
const getters = {
  login: state => {
    // if (!state.logined) {
    //   return sessionStorage.getItem('logined')
    // }
    return state.logined
  }
}

// actions
const actions = {
  login ({ commit }) {
    commit('login')
  },
  logout ({ commit }) {
    commit('logout')
  }
}

// mutations
const mutations = {
  login (state) {
    state.logined = true
    // sessionStorage.setItem('logined', true)
  },
  logout (state) {
    state.logined = false
    // sessionStorage.removeItem('logined')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
