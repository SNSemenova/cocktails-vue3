<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <Navigation />
  <main>
    <RouterView />
  </main>
</template>

<style>
body {
  margin: 0;
}
#app {
  display: flex;
  min-height: 100vh;
}
main {
  flex: 1;
  padding: 24px 16px;
}
</style>
