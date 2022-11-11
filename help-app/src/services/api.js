import axios from 'axios'

export const BASE_URL = 'http://localhost:3001'

const client = axios.create({ baseURL: BASE_URL })

client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default client
