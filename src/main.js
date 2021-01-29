import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import httpService from './services/http'

import '@/assets/scss/base.scss'

Vue.config.productionTip = false

httpService.initializeInterceptors()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
