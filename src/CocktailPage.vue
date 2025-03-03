<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { getCocktail } from "./api.ts";
import { useStore } from "./useStore.ts";

const store = useStore();
const route = useRoute();

watch(() => route.params.id, fetchData, { immediate: true });

async function fetchData(id: string | string[]) {
  store.fetchCocktail(typeof id === "string" ? id : id[0]);
}
</script>
<template>
  <div v-if="store.loading" class="loading">Loading...</div>

  <div v-if="store.error" class="error">Something went wrong</div>

  <div v-if="store.drinks.length">
    <h1>Cocktail {{ $route.params.id }}</h1>
    <div v-for="drink in store.drinks" :key="drink.idDrink">
      <h2>{{ drink.strDrink }}</h2>
      <img :src="drink.strDrinkThumb" :alt="drink.strDrink" />
      <p>{{ drink.strInstructions }}</p>
    </div>
  </div>
</template>
