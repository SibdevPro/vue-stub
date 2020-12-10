import client from './client'
import AuthService from './auth'

export const authService = new AuthService(client)
authService.restoreAuthTokens()

export function initializeInterceptors() {
  // client.interceptors.request.use()
  client.interceptors.response.use(
    response => response,
    error => {
      // implementation of handling http errors
      return Promise.reject(error)
    }
  )
}
