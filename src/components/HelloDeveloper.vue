<template>
  <div class="hello-developer">
    <h1>Привет, {{ developer }}!</h1>
    <h3>Полезное:</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li>
        <a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a>
      </li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
    </ul>
    <ul>
      <li>
        <template v-if="someGetter">{{ someGetter }}</template>
        <button v-else type="button" @click="handleClick">{{ buttonText }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { LOGIN } from '@/store/actions/types'

export default {
  name: 'HelloDeveloper',
  props: {
    developer: {
      type: String,
      required: true
    }
  },
  computed: {
    loading() {
      return this.$store.state.someState.loading
    },
    buttonText() {
      return this.loading ? 'Загрузка...' : 'Ассинхроное действие'
    },
    someGetter() {
      return this.$store.getters.someGetter
    }
  },
  methods: {
    handleClick() {
      this.$store.dispatch(LOGIN)
    }
  }
}
</script>

<style scoped lang="scss">
.hello-developer {
  ul {
    list-style: none;
  }
}
</style>
