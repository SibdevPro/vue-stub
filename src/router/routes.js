import { DASHBOARD_ROUTE_NAME, LOGIN_ROUTE_NAME, PRIVATE_ROUTE_NAME } from '@/constants/routes'
import { checkAuth, checkNonAuth } from './middleware'

export default [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: 'home' */ '@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: 'about' */ '@/views/About.vue')
  },
  {
    path: '/auth',
    component: () => import(/* webpackChunkName: 'auth-layout' */ '@/layouts/Auth.vue'),
    redirect: LOGIN_ROUTE_NAME,
    meta: {
      middleware: [checkNonAuth]
    },
    children: [
      {
        path: '/auth/login',
        name: LOGIN_ROUTE_NAME,
        component: () => import(/* webpackChunkName: 'login' */ '@/views/Login.vue')
      }
    ]
  },
  {
    path: '/dashboard',
    name: DASHBOARD_ROUTE_NAME,
    component: () => import(/* webpackChunkName: 'dashboard-layout' */ '@/layouts/Dashboard.vue'),
    meta: {
      middleware: [checkAuth]
    },
    redirect: PRIVATE_ROUTE_NAME,
    children: [
      {
        path: '/dashboard/private',
        name: PRIVATE_ROUTE_NAME,
        component: () => import(/* webpackChunkName: 'private' */ '@/views/Private.vue')
      }
    ]
  }
]
