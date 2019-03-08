import axios from 'axios'

const API_URL = process.env.NODE_ENV === 'development' ? process.env.VUE_APP_BASE_URL_DEV : process.env.VUE_APP_BASE_API_URL_PROD

const apiClient = axios.create({
  baseURL: `//${API_URL}`,
  withCredentials: false,
  timeout: 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  postFormData (method, data) {
    console.log('method', method)
    console.log('data', data)
    console.log(btoa(JSON.stringify(data)))
    return apiClient.post(`/api/v1/${method}/${btoa(JSON.stringify(data))}`)
  }
}
