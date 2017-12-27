import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    business: null,
    documentWidth: document.body.clientWidth
  },
  mutations: {
    setBusinessInfo (state, payload) {
      state.business = payload.business
    },
    setDocumentWidth (state, payload) {
      state.documentWidth = payload
    }
  },
  actions: {
    fetchData ({commit}, payload) {
      commit('setBusinessInfo', payload)
    },
    changeDocumentWidth ({commit}, payload) {
      console.log('payload', payload)
      commit('setDocumentWidth', payload)
    }
  },
  getters: {
    business (state) {
      return state.business
    },
    documentWidth (state) {
      return state.documentWidth
    }
  }
})
