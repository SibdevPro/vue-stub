import authService from '@/services/auth';
import { PRIVATE_ROUTE_NAME } from '@/constants/routes';

export default function checkNonAuth({ next }) {
  const hasAuthTokens = authService.hasAuthTokens();
  if (hasAuthTokens) return next({ name: PRIVATE_ROUTE_NAME });
  return next();
}
