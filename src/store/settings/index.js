import actions from '@/store/settings/actions'
import mutations from '@/store/settings/mutations'
import getters from '@/store/settings/getters'

export default {
  namespaced: true,
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
  mutations,
  actions,
  getters
}
