import { defineStore } from "pinia";
import { getCocktail } from "./api";

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
        // TODO: 404 error if no drinks
      } catch (error) {
        this.error = true;
      }
      this.loading = false;
    },
  },
});

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
}
