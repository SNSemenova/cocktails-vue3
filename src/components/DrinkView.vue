<script setup lang="ts">
import { computed } from "vue";
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
const ingredients = computed(() =>
  Object.keys(props.drink)
    .filter(
      (key) =>
        key.startsWith("strIngredient") &&
        props.drink[key as keyof typeof props.drink],
    )
    .map((key) => props.drink[key as keyof typeof props.drink]),
);
const measures = computed(() =>
  Object.keys(props.drink)
    .filter(
      (key) =>
        key.startsWith("strMeasure") &&
        props.drink[key as keyof typeof props.drink],
    )
    .map((key) => props.drink[key as keyof typeof props.drink]),
);
</script>

<template>
  <div v-if="drink" class="drink-view">
    <div class="drink-view__info">
      <h2>{{ drink.strDrink }}</h2>
      <div>
        <p v-for="attribute in drinkAttributes" :key="attribute">
          {{ drink[attribute] }}
        </p>
      </div>
      <div>
        <h3>Instructions:</h3>
        <p>{{ drink.strInstructions }}</p>
      </div>
      <div>
        <h3>Ingredients:</h3>
        <ul>
          <li v-for="(ingredient, index) in ingredients" :key="index">
            {{ measures[index] }} {{ ingredient }}
          </li>
        </ul>
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
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
  background: #ffffff;
  border-radius: 10px;
  padding: 24px;
}
.drink-view__info {
  display: flex;
  flex-direction: column;
  width: 50%;
  h2 {
    margin-top: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}
.drink-view__image {
  width: 50%;
  text-align: end;
  img {
    width: 100%;
    max-width: 400px;
  }
}
@media (max-width: 768px) {
  .drink-view {
    flex-direction: column-reverse;
    align-items: center;
  }
  .drink-view__info {
    width: 100%;
  }
  .drink-view__image {
    width: auto;
  }
}
</style>
