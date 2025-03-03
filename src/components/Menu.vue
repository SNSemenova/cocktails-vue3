<script setup lang="ts">
import { watch } from "vue";
import { ref } from "vue";
const isOpen = ref(false);
const route = useRoute();
import { useRoute } from "vue-router";
watch(
  () => route.path,
  () => {
    console.log("route changed");
    isOpen.value = false;
  },
  { immediate: true },
);
</script>

<template>
  <nav class="sidebar">
    <slot />
  </nav>
  <button @click="isOpen = !isOpen" class="menu-button">☰ Menu</button>
  <div v-if="isOpen" class="dropdown-menu">
    <slot />
  </div>
</template>

<style lang="scss">
.sidebar {
  width: 200px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #000000;
  padding: 24px 0;
}

.menu-button {
  display: none;
  position: fixed;
  top: 15px;
  left: 15px;
  padding: 10px 15px;
  background: #f5f5f5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.dropdown-menu {
  position: absolute;
  top: 50px;
  left: 15px;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  width: 200px;
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
  .menu-button {
    display: block;
  }
}
</style>
