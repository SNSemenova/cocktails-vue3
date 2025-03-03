<script setup lang="ts">
import cocktailsList from "@/cocktailsList";
</script>

<template>
  <nav>
    <RouterLink
      v-for="cocktail in cocktailsList"
      :key="cocktail"
      :to="`/${cocktail}`"
      class="nav-link"
    >
      {{ cocktail }}
    </RouterLink>
  </nav>
</template>

<style lang="scss">
nav {
  width: 200px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #000000;
  padding: 24px 0;
}
.nav-link {
  text-transform: capitalize;
  text-decoration: none;
  color: var(--font-color);
  padding: 8px 16px;
}
.router-link-active {
  background: #dedede;
}
</style>
