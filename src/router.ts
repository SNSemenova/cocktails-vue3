import { createWebHistory, createRouter } from "vue-router";

import CocktailPage from "./pages/CocktailPage.vue";
import cocktailsList from "./cocktailsList";
import NotFound from "./pages/NotFound.vue";

const routes = [
  { path: "/404", component: NotFound },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  { path: "/", redirect: `/${cocktailsList[0]}` },
  { path: "/:id", component: CocktailPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
