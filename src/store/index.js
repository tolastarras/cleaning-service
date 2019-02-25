import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    business: null,
    services: null,
    parallax: null,
    documentWidth: window.innerWidth
  },
  mutations: {
    SET_BUSINESS_INFO (state, payload) {
      state.business = payload.business
    },
    SET_DOCUMENT_WIDTH (state, width) {
      state.documentWidth = width
    },
    SET_SERVICES (state, services) {
      state.services = services
    },
    SET_PARALLAX (state, payload) {
      state.parallax = payload
    }
  },
  actions: {
    init ({ commit }, payload) {
      commit('SET_BUSINESS_INFO', payload)
      commit('SET_SERVICES', payload.services)
      commit('SET_PARALLAX', payload.parallaxItems)
    },
    changeDocumentWidth ({ commit }, width) {
      commit('SET_DOCUMENT_WIDTH', width)
    }
    // loadServices ({ commit }, payload) {
    //   commit('SET_SERVICES', payload)
    // }
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
