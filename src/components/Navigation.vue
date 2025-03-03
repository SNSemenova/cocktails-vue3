<script setup lang="ts">
import Menu from "@/components/Menu.vue";
import cocktailsList from "@/cocktailsList";
</script>

<template>
  <Menu>
    <RouterLink
      v-for="cocktail in cocktailsList"
      :key="cocktail"
      :to="`/${cocktail}`"
      class="nav-link"
    >
      {{ cocktail }}
    </RouterLink>
  </Menu>
</template>

<style lang="scss">
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
