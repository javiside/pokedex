export default {
  setLoadingPokemons(state, { loading }) {
    state.loadingPokemons = loading;
  },
  setPokemonsError(state, payload) {
    state.pokemonsError = payload.error;
  },
  setPokemons(state, { pokemons }) {
    if (!state.fetchedPokemons) {
      state.fetchedPokemons = pokemons;
    }
    state.pokemons = pokemons;
  },
  setAvatars(state, { avatars, PAGE_CHECK }) {
    if (avatars && !state.avatars[PAGE_CHECK]) {
      state.avatars = { ...state.avatars, ...avatars };
      state.avatars[PAGE_CHECK] = true;
    }
  },
  // filterPokemons(state, { searchVal }) {
  //   state.pokemons = state.fetchedPokemons.filter(
  //     ({ email, name, pokemonName }) => {
  //       return (
  //         `${email}${name}${pokemonName}`
  //           .toLowerCase()
  //           .indexOf(searchVal.toLowerCase()) >= 0
  //       );
  //     }
  //   );
  // },
  // sortPokemons(state, { selected }) {
  //   if (/name|email|pokemonName/.test(selected)) {
  //     state.pokemons = (state.pokemons || state.fetchedPokemons).sort((a, b) =>
  //       a[selected].localeCompare(b[selected])
  //     );
  //   }
  // },
};
