/* eslint-disable no-underscore-dangle */
import { loadStorageItem, saveStorageItem, removeStorageItem } from '@/services/storage'
import BaseHttpService from './base'
import { setHeader, unsetHeader } from './client'

const AUTH_HEADER = 'Authorization'

const ACCESS_TOKEN = 'accessToken'
const REFRESH_TOKEN = 'refreshToken'

function generateAuthHeader(accessToken) {
  return `Bearer ${accessToken}`
}

class AuthService extends BaseHttpService {
  _access = null

  _refresh = null

  _isTokensSync = true

  get isTokensSync() {
    // eslint-disable-next-line no-underscore-dangle
    return this._isTokensSync
  }

  set isTokensSync(isSync) {
    this._isTokensSync = isSync
  }

  get access() {
    return this._access
  }

  set access(token) {
    this._access = token
    this.syncAuthHeader()

    if (this.isTokensSync) {
      if (token) {
        saveStorageItem(ACCESS_TOKEN, this._access)
      } else {
        removeStorageItem(ACCESS_TOKEN)
      }
    }
  }

  get refresh() {
    return this._refresh
  }

  set refresh(token) {
    this._refresh = token

    if (this.isTokensSync) {
      if (token) {
        saveStorageItem(REFRESH_TOKEN, this._refresh)
      } else {
        removeStorageItem(REFRESH_TOKEN)
      }
    }
  }

  hasAuthHeader() {
    return !!this.client.defaults.headers.common[AUTH_HEADER]
  }

  syncAuthHeader() {
    if (this.access) {
      setHeader(AUTH_HEADER, generateAuthHeader(this.access))
    } else {
      unsetHeader(AUTH_HEADER)
    }
  }

  setAuthTokens({ access, refresh }) {
    this.access = access
    this.refresh = refresh
  }

  removeAuthTokens() {
    this.access = null
    this.refresh = null
  }

  restoreAuthTokens() {
    this.setAuthTokens({
      access: loadStorageItem(ACCESS_TOKEN),
      refresh: loadStorageItem(REFRESH_TOKEN)
    })
  }

  // implementation of refresh tokens
  refreshAuthTokens() {
    return Promise.resolve({ access: 'someAccess', refresh: 'someRefresh' }).then(tokens => {
      this.setAuthTokens(tokens)
    })
  }

  // implementation of authentication
  // eslint-disable-next-line class-methods-use-this
  auth() {
    return new Promise(resolve => {
      setTimeout(() => {
        const model = { someProperty: 'Какое-то значение модели авторизации' }
        resolve(model)
      }, 3000)
    })
  }
}

export default AuthService
