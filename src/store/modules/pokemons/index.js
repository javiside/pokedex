import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  state() {
    return {
      loadingPokemons: null,
      pokemonsError: null,
      fetchedPokemons: null,
      avatars: {},
      pokemons: null,
    };
  },
  getters,
  actions,
  mutations,
};
