import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import createMiddlewarePipeline from '@/router/createMiddlewarePipeline';
import { collectMatchedMiddleware } from '@/utils/router';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// Fix navigation failure, see more: https://github.com/vuejs/vue-router/issues/2881
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(error => {
    if (VueRouter.isNavigationFailure(error)) {
      // resolve error
      return error;
    }
    // rethrow error
    return Promise.reject(error);
  });
};

// Route guards
router.beforeEach((to, from, next) => {
  const middleware = collectMatchedMiddleware(to.matched);

  const firstMiddleware = middleware[0];
  if (!firstMiddleware) {
    next();
    return;
  }

  const context = { to, from, next, store };
  createMiddlewarePipeline(context, middleware)();
});

export default router;
