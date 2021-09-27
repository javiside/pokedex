import fetchData from "../../../services/FetchData";

export default {
  async fetchPokemons({ commit, state }) {
    if (state.fetchedPokemons) {
      return;
    }
    commit({ type: "setLoadingPokemons", loading: true });
    const pokemonsRes = await fetchData(
      "https://pokeapi.co/api/v2/pokemon/?limit=150"
    );
    commit({ type: "setLoadingPokemons", loading: false });

    if (pokemonsRes.error) {
      commit({
        type: "setPokemonsError",
        error: pokemonsRes.error.message,
      });
    } else {
      const idRegex = /pokemon\/(\d+)\/$/;
      commit({
        type: "setPokemons",
        pokemons: pokemonsRes.data.results.map(({ name, url }) => ({
          id: idRegex.exec(url)[1],
          name,
          url,
        })),
      });
      // commit({ type: "sortPokemons", selected: "name" });
    }
  },
  async fetchAvatars({ commit, state }, { page, start }) {
    const CHUNK_SIZE_LIMIT = 10;
    const PAGE_CHECK = `p${page}`;
    if (state.avatars[PAGE_CHECK] || page > 15) {
      return;
    }

    const getCurrentAvatars = new Promise((r) =>
      (async () => {
        const avatars = {};
        for (let idx = start; idx < start + CHUNK_SIZE_LIMIT; idx++) {
          const avatarsRes = await fetchData(
            `https://pokeapi.co/api/v2/pokemon-form/${idx}`
          );
          if (!avatarsRes.error && avatarsRes.data) {
            const id = avatarsRes.data.id;
            avatars[id] = avatarsRes.data.sprites?.front_default;
          }
        }
        return r(avatars);
      })()
    );
    commit({
      type: "setAvatars",
      PAGE_CHECK,
      avatars: await getCurrentAvatars,
    });
  },
  filterPokemons({ commit }, payload) {
    commit("filterPokemons", payload);
  },
  sortPokemons({ commit }, payload) {
    commit("sortPokemons", payload);
  },
};
