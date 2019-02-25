import axios from 'axios'

const apiClient = axios.create({
  baseURL: '//tolastarras.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  postFormData (data) {
    console.log('ENV', process.env)
    return apiClient.post('/api/message', data)
  }
}
