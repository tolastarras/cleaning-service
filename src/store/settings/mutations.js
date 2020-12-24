export default {
  SET_DATA (state, payload) {
    state.business = payload.business
    state.parallax = payload.parallax
    state.items = payload.items
    state.cards = payload.cards
    state.services = payload.services
    state.frequencies = payload.frequencies
    state.testimonials = payload.testimonials
  },
  SET_DOCUMENT_WIDTH (state, width) {
    state.documentWidth = width
  }
}
