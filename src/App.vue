<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
