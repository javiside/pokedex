import { createRouter, createWebHistory } from "vue-router";
import ThePokedex from "../views/ThePokedex.vue";

const routes = [
  {
    path: "/",
    name: "ThePokedex",
    component: ThePokedex,
    children: [
      {
        path: "/:pokemonId",
        name: "PokemonDetails",
        component: () => import("../views/PokemonDetails.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
