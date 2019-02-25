import axios from 'axios'

const apiClient = axios.create({
  baseURL: '//sobrino.co',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  postFormData (data) {
    return apiClient.post('/api/message', data)
  }
}
