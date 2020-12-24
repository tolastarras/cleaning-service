import Vue from 'vue'
import Vuex from 'vuex'

import settings from '@/store/settings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    settings
  },
  state: {
    business: null,
    parallax: null,
    items: [],
    cards: [],
    services: [],
    frequencies: [],
    testimonials: [],
    documentWidth: window.innerWidth
  },
  mutations: {
    SET_DATA (state, { business, frequencies, services, parallax, items, cards, testimonials }) {
      state.business = business
      state.parallax = parallax
      state.items = items
      state.cards = cards
      state.services = services
      state.frequencies = frequencies
      state.testimonials = testimonials
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
    serviceTypes: state => state.services.map(service => service.title),
    contactMethods: state => Object.values(state.business).filter(business => business.icon)
  }
})
