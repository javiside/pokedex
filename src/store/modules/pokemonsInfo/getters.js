export default {
  loadingInfo(state) {
    return state.loadingInfo;
  },
  infoError(state) {
    return state.infoError;
  },
  currentPokemon(state, { currentPokemonId }) {
    return state.pokemonsInfo[currentPokemonId];
  },
};
