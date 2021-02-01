<template>
  <div id="app">
    <div class="nav">
      <template v-for="(link, index) in navigationLinks">
        <router-link :key="index" :to="link.to">{{ link.title }}</router-link>
        <template v-if="index < navigationLinks.length - 1"> | </template>
      </template>
    </div>
    <router-view />
  </div>
</template>

<script>
import { DASHBOARD_ROUTE_NAME, LOGIN_ROUTE_NAME } from '@/constants/routes'

export default {
  name: 'App',
  computed: {
    navigationLinks() {
      return [
        { to: { path: '/' }, title: 'Home' },
        { to: { path: '/about' }, title: 'About' },
        { to: { name: LOGIN_ROUTE_NAME }, title: 'Login' },
        { to: { name: DASHBOARD_ROUTE_NAME }, title: 'Dashboard' }
      ]
    }
  }
}
</script>

<style lang="scss">
$--green: #42b983;

#app {
  text-align: center;
}

.nav {
  padding: 30px;

  a {
    font-weight: $--font-weight-bold;
    &.router-link-exact-active {
      color: $--green;
    }
  }
}
</style>
