import { LOADING, SET_MODEL, LOADED } from '@/store/mutations/types'
import { throwError } from '@/utils/store'
import { authService } from '@/services/http'
import * as types from './types'

export default {
  [types.LOGIN]: ({ commit }) => {
    const name = 'someState'
    commit(LOADING, name)

    return authService
      .auth()
      .then(model => {
        commit(SET_MODEL, { name, model })
      })
      .catch(throwError(commit, 'Ошибка авторизации'))
      .finally(() => {
        commit(LOADED, name)
      })
  }
}
