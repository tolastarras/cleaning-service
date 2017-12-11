import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    business: null
  },
  mutations: {
    setBusinessInfo (state, payload) {
      state.business = payload.business
    }
  },
  actions: {
    fetchData ({commit}, payload) {
      commit('setBusinessInfo', payload)
    }
  },
  getters: {
    business (state) {
      return state.business
    }
  }
})
