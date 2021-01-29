import { LOADING, SET_MODEL, LOADED } from '@/store/mutations/types'
import { throwError } from '@/utils/store'
import authService from '@/services/auth'
import * as types from './types'

export default {
  [types.LOGIN]: ({ commit }, { login = 'some-login', password = 'some-password' } = {}) => {
    const name = 'someState'
    commit(LOADING, name)

    return authService
      .login({ login, password })
      .then(model => {
        commit(SET_MODEL, { name, model })
      })
      .catch(throwError(commit, 'Ошибка авторизации'))
      .finally(() => {
        commit(LOADED, name)
      })
  }
}
