import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    business: null,
    services: null,
    documentWidth: document.body.clientWidth
  },
  mutations: {
    setBusinessInfo (state, payload) {
      state.business = payload.business
    },
    setDocumentWidth (state, payload) {
      state.documentWidth = payload
    },
    setServices (state, payload) {
      state.services = payload
    }
  },
  actions: {
    fetchData ({commit}, payload) {
      console.log(payload.services)
      commit('setBusinessInfo', payload)
      commit('setServices', payload.services)
    },
    changeDocumentWidth ({commit}, payload) {
      commit('setDocumentWidth', payload)
    },
    loadServices ({commit}, payload) {
      commit('setServices', payload)
    }
  },
  getters: {
    business (state) {
      return state.business
    },
    documentWidth (state) {
      return state.documentWidth
    },
    services (state) {
      return state.services
    }
  }
})
