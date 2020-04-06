import axios from 'axios'

const client = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL || '/',
  withCredentials: true
})

export default {
  client,
  auth() {
    return new Promise(resolve => {
      setTimeout(() => {
        const model = { someProperty: 'Какое-то значение' }
        resolve(model)
      }, 3000)
    })
  }
}
