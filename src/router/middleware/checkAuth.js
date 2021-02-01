import authService from '@/services/auth'
import { LOGIN_ROUTE_NAME } from '@/constants/routes'

export default function checkAuth({ next }) {
  const hasAuthTokens = authService.hasAuthTokens()
  if (hasAuthTokens) return next()
  return next({ name: LOGIN_ROUTE_NAME })
}
