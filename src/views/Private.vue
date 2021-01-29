<template>
  <div class="private">
    <h1>Страница private</h1>

    <button type="button" @click="logout">выйти</button>
  </div>
</template>

<script>
import { LOGIN_ROUTE_NAME } from '@/constants/routes'
import authService from '@/services/auth'

export default {
  name: 'Private',
  methods: {
    logout() {
      return authService.logout().then(() => {
        this.$router.push({ name: LOGIN_ROUTE_NAME })
      })
    }
  }
}
</script>
