import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    business: null,
    parallax: null,
    services: [],
    frequencies: [],
    documentWidth: window.innerWidth
  },
  mutations: {
    SET_DATA (state, { business, frequencies, services, parallax }) {
      state.business = business
      state.services = services
      state.frequencies = frequencies
      state.parallax = parallax
    },
    SET_DOCUMENT_WIDTH (state, width) {
      state.documentWidth = width
    }
  },
  actions: {
    init ({ commit }, payload) {
      commit('SET_DATA', payload)
    },
    changeDocumentWidth ({ commit }, width) {
      commit('SET_DOCUMENT_WIDTH', width)
    }
  },
  getters: {
    serviceTypes: state => state.services.map(service => service.title)
  }
})
