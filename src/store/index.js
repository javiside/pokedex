import { createStore } from "vuex";

import pokemonsModule from "./modules/pokemons/index";
import pokemonsInfoModule from "./modules/pokemonsInfo/index";

const store = createStore({
  modules: {
    pokemonsModule,
    pokemonsInfoModule,
  },
  state() {
    return {
      currentId: null,
      pokemonsNames: {},
    };
  },
  getters: {
    currentPokemonId(state) {
      return state.currentId;
    },
    currentPokemonUrl(state) {
      return state.avatars?.[state.currentId];
    },
  },
  actions: {
    setCurrentId(context, payload) {
      context.commit("setCurrentId", payload);
    },
    setCurrentName(context, payload) {
      context.commit("setCurrentName", payload);
    },
  },
  mutations: {
    setCurrentId(state, { id }) {
      state.currentId = id;
    },
    setCurrentName(state, { name, id }) {
      state.pokemonsNames[id] = name;
    },
  },
});

export default store;
