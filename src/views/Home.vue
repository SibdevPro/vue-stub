<template>
  <div class="home">
    <hello-developer developer="Разработчик" />
  </div>
</template>

<script>
import HelloDeveloper from '@/components/HelloDeveloper.vue'

export default {
  name: 'Home',
  components: {
    HelloDeveloper
  }
}
</script>
