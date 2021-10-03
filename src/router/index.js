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

router.beforeEach((to, from, next) => {
  const id = to?.params?.pokemonId;
  if (!id || (id > 0 && id <= 150)) {
    next();
  } else {
    next("/");
  }
});

export default router;
