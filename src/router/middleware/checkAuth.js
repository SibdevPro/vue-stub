import { LOGIN_ROUTE_NAME } from '@/constants/routes'
import { authService } from '@/services/http'

export default function checkAuth({ next }) {
  const hasAuthHeader = authService.hasAuthHeader()
  if (hasAuthHeader) return next()
  return next({ name: LOGIN_ROUTE_NAME })
}
