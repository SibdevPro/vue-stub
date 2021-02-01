function createMiddlewarePipeline(context, middleware) {
  const nextMiddleware = middleware[0]
  const restMiddleware = middleware.slice(1)

  if (!nextMiddleware) {
    return context.next
  }

  return nextRoute => {
    if (nextRoute !== undefined) {
      context.next(nextRoute)
    } else {
      const nextPipeline = createMiddlewarePipeline(context, restMiddleware)
      nextMiddleware({ ...context, next: nextPipeline })
    }
  }
}

export default createMiddlewarePipeline
