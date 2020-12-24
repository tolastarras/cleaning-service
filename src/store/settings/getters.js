const serviceTypes = state => state.services.map(service => service.title)
const contactMethods = state => Object.values(state.business).filter(business => business.icon)

export default {
  serviceTypes,
  contactMethods
}
