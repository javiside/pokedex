export default {
  setLoadingInfo(state, { loading }) {
    state.loadingInfo = loading;
  },
  setInfoError(state, { error }) {
    state.infoError = error;
  },
  setPokemonInfo(state, { pokemon }) {
    state.pokemonsInfo[pokemon.id] = pokemon;
  },
};
