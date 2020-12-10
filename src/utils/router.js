export function collectMatchedMiddleware(matchedRoutes) {
  return matchedRoutes.reduce((guards, matchedRoute) => {
    const routeGuards = matchedRoute.meta.middleware
      ? matchedRoute.meta.middleware.filter(someGuard => !guards.includes(someGuard))
      : []

    if (routeGuards && routeGuards.length) {
      return [...guards, ...routeGuards]
    }

    return guards
  }, [])
}

export default collectMatchedMiddleware
