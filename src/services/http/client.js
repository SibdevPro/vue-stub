import axios from 'axios'

const timeout = 600000
const client = axios.create({ baseURL: process.env.VUE_APP_BASE_URL || '/', timeout })

export function setHeader(key, value) {
  client.defaults.headers.common[key] = value
}

export function unsetHeader(key) {
  delete client.defaults.headers.common[key]
}

export default client
