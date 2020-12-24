const init = ({ commit }, payload) => {
  commit('SET_DATA', payload)
}

const changeDocumentWidth = ({ commit }, width) => {
  commit('SET_DOCUMENT_WIDTH', width)
}

export default {
  init,
  changeDocumentWidth
}
