<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getCocktail } from "@/api.ts";
import { useStore } from "@/useStore.ts";
import cocktailsList from "@/cocktailsList";
import DrinkView from "@/components/DrinkView.vue";

const store = useStore();
const route = useRoute();
const router = useRouter();

watch(
  () => route.params.id,
  async (newId, oldId) => {
    if (newId === oldId) return;

    const cocktailId = typeof newId === "string" ? newId : newId?.[0];
    if (!cocktailsList.includes(cocktailId)) {
      router.push("/404");
      return;
    }
    store.fetchCocktail(cocktailId);
  },
  { immediate: true },
);
</script>

<template>
  <div v-if="store.loading" class="loading">Loading...</div>

  <div v-if="store.error" class="error">Something went wrong</div>

  <div v-if="store.drinks.length">
    <h1>Cocktail {{ $route.params.id }}</h1>
    <DrinkView
      v-for="drink in store.drinks"
      :key="drink.idDrink"
      :drink="drink"
    />
  </div>
</template>
