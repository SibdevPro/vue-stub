import { authService } from '@/services/http'
import { PRIVATE_ROUTE_NAME } from '@/constants/routes'

export default function checkNonAuth({ next }) {
  const hasAuthHeader = authService.hasAuthHeader()
  // Если пользователь авторизован
  if (hasAuthHeader) return next({ name: PRIVATE_ROUTE_NAME })
  return next()
}
