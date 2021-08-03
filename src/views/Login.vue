<template>
  <div class="login">
    <h1>Страница login</h1>

    <button type="button" @click="login">войти</button>
  </div>
</template>

<script>
import { LOGIN } from '@/store/actions/types';
import { PRIVATE_ROUTE_NAME } from '@/constants/routes';

export default {
  name: 'Login',
  methods: {
    login() {
      return this.$store.dispatch(LOGIN).then(() => {
        this.$router.push({ name: PRIVATE_ROUTE_NAME });
      });
    },
  },
};
</script>
