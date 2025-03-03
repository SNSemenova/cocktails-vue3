<script setup lang="ts">
import { defineProps } from "vue";
import type { Drink } from "@/types/drink.ts";
const props = defineProps({
  drink: {
    type: Object as () => Drink,
    required: true,
  },
});
const drinkAttributes: Array<keyof Drink> = [
  "strCategory",
  "strAlcoholic",
  "strGlass",
];
</script>

<template>
  <div class="drink-view">
    <div class="drink-view__info">
      <h2>{{ drink.strDrink }}</h2>
      <div>
        <p v-for="attribute in drinkAttributes">{{ drink[attribute] }}</p>
      </div>
      <div>
        <h3>Instructions:</h3>
        <p>{{ drink.strInstructions }}</p>
      </div>
    </div>
    <div class="drink-view__image">
      <img :src="drink.strDrinkThumb" :alt="drink.strDrink" loading="lazy" />
    </div>
  </div>
</template>

<style lang="scss">
.drink-view {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 24px;
}
.drink-view__info {
  display: flex;
  flex-direction: column;
}
.drink-view__image {
  img {
    max-width: 400px;
  }
}
</style>
