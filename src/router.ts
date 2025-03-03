import { createWebHistory, createRouter } from "vue-router";

import CocktailPage from "./CocktailPage.vue";
import cocktailsList from "./cocktailsList";

const routes = [
  { path: "/", redirect: `/${cocktailsList[0]}` },
  { path: "/:id", component: CocktailPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
