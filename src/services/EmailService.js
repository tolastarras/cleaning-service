import axios from 'axios'
console.log('hello', process.env)
// my-api.test
// 'development'
const apiClient = axios.create({
  baseURL: `//${process.env.VUE_APP_BASE_URL_PROD}`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  postFormData (data) {
    return apiClient.post('/api/v1/', data)
  }
}
