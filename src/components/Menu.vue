<script setup lang="ts">
import { watch } from "vue";
import { ref } from "vue";
const isOpen = ref(false);
const route = useRoute();
import { useRoute } from "vue-router";
watch(
  () => route.path,
  () => {
    isOpen.value = false;
  },
  { immediate: true },
);
</script>

<template>
  <nav class="sidebar">
    <slot />
  </nav>
  <button class="menu-button" @click="isOpen = !isOpen">☰ Menu</button>
  <div v-if="isOpen" class="dropdown-menu">
    <slot />
  </div>
</template>

<style lang="scss">
.sidebar {
  width: 200px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 24px 0;
}

.menu-button {
  display: none;
  position: fixed;
  top: 15px;
  left: 15px;
  padding: 10px 15px;
  background: #ffffff;
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
