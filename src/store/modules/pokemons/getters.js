export default {
  loadingPokemons(state) {
    return state.loadingPokemons;
  },
  pokemonsError(state) {
    return state.pokemonsError;
  },
  pokemons(state) {
    return state.pokemons;
  },
  pokemonNames(state, getters) {
    return state.pokemons?.filter(
      ({ id }) => id === getters.currentPokemonId
    )?.[0]?.name;
  },
  avatars(state) {
    return state.avatars;
  },
};
