import { defineStore } from "pinia";
import { getCocktail } from "./api";
import type { Drink } from "./types/drink";

export const useStore = defineStore("cocktails", {
  state: () => ({
    drinks: [] as Drink[],
    loading: false,
    error: false,
  }),
  actions: {
    async fetchCocktail(id: string) {
      this.loading = true;
      this.drinks = [];
      this.error = false;
      try {
        const data = await getCocktail(id);
        this.drinks = data.drinks;
      } catch (error) {
        this.error = true;
      }
      this.loading = false;
    },
  },
});
