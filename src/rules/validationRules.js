export default {
  name: () => [
    v => !!v || 'Field is required',
    v => (v && v.length >= 3 && v.length <= 20) || 'Field must be between 3 and 20 characters in length'
  ],
  email: () => [
    v => !!v || 'E-mail is required' + v,
    // eslint-disable-next-line
    v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
  ],
  phone: () => [
    v => !!v || 'Phone is required',
    v => /^\d{10}$/.test(v) || 'Phone must be 10 digits in length'
  ],
  message: () => [
    v => !!v || 'Message is required',
    v => (v && v.length >= 10 && v.length <= 300) || 'Message must be between 10 and 300 characters'
  ],
  service: () => [v => !!v || 'Service is required'],
  frequency: () => [v => !!v || 'Frequency is required']
}
