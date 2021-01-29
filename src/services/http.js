import { AUTH_HEADER, ERROR_STATUSES } from '@/constants/http'
import authService from './auth'
import client, { addRequestInterceptor, addResponseInterceptor } from './http.client'

function requestWithAuth({ _withoutAuthHeader = false, ...config }) {
  if (_withoutAuthHeader) {
    return config
  }

  const additionalHeaders = {
    [AUTH_HEADER]: authService.getAuthHeader()
  }

  return {
    ...config,
    headers: {
      ...config.headers,
      ...additionalHeaders
    }
  }
}

function handleAuthError(error) {
  const errorStatus = error.response.status

  if (errorStatus === ERROR_STATUSES.UNAUTHORIZED) {
    const { _retry } = error.config
    if (!_retry) {
      return authService.refreshAuthTokens().then(() =>
        client.request({
          ...error.config,
          headers: {
            ...error.config.headers
          },
          _retry: true
        })
      )
    }
  }

  return Promise.reject(error)
}

function initializeInterceptors() {
  authService.restoreAuthTokens()
  addRequestInterceptor({ request: requestWithAuth })
  addResponseInterceptor({ error: handleAuthError })
}

export default { initializeInterceptors }
