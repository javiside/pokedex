import fetchData from "../../../services/FetchData";

export default {
  async fetchPokemonInfo({ commit, state }, { id }) {
    if (state.pokemonsInfo[id]) {
      return;
    }
    commit({ type: "setLoadingInfo", loading: true });
    const infoRes = await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`);

    commit({ type: "setLoadingInfo", loading: false });

    if (infoRes.error) {
      commit({
        type: "setInfoError",
        error: infoRes.error.message,
      });
    } else {
      const types = infoRes.data.types.map(({ type }) => type?.name);
      commit({ type: "setPokemonInfo", pokemon: { id, types } });
    }
  },
};
