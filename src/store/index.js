import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    business: null,
    services: null,
    parallax: null,
    // documentWidth: document.body.clientWidth
    documentWidth: window.innerWidth
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
    },
    setParallax (state, payload) {
      state.parallax = payload
    }
  },
  actions: {
    fetchData ({commit}, payload) {
      // console.log(payload.parallaxItems)
      commit('setBusinessInfo', payload)
      commit('setServices', payload.services)
      commit('setParallax', payload.parallaxItems)
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
    },
    parallax (state) {
      return state.parallax
    }
  }
})
