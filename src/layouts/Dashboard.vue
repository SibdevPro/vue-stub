<template>
  <div class="dashboard-layout">
    <aside class="dashboard-layout__sidebar">sidebar</aside>

    <div class="dashboard-layout__wrapper">
      <header class="dashboard-layout__header">header</header>

      <main class="dashboard-layout__main">
        <router-view />
      </main>

      <footer class="dashboard-layout__footer">footer</footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardLayout'
}
</script>

<style lang="scss">
// .dashboard-layout {
//   &__sidebar {}
//   &__wrapper {}
//   &__header {}
//   &__main {}
//   &__footer {}
// }
</style>
