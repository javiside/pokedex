<template>
  <a-skeleton :loading="loadingPokemons" active :paragraph="{ rows: 10 }">
    <div class="pokedex">
      <picture>
        <source srcset="../assets/pokeL.png" media="(min-width: 768px)" />
        <img class="pokedex" src="../assets/pokeS.png" alt="pokedex" />
      </picture>
      <img class="pikachu" src="../assets/25.gif" alt="pikachu" />
      <img
        v-if="!currentId"
        class="screen-bg"
        src="../assets/1.gif"
        alt="background"
      />
      <router-view />
      <div class="pagination">
        <span>{{ page }}</span
        ><span>/</span><span>{{ maxPage }}</span>
        <div class="pag-btns">
          <button type="button" @click="handlePgn(page - 1)">-</button>
          <button type="button" @click="handlePgn(page + 1)">+</button>
        </div>
      </div>
      <a-alert
        class="error"
        v-if="pokemonsError"
        message="Error"
        type="error"
        :description="pokemonsError"
        show-icon
      />
      <ul v-else class="pokemon-list">
        <pokemon-list-item
          v-for="pokemon in currentPokemons"
          :key="pokemon.url"
          :pokemon="pokemon"
          :avatarUrl="avatars?.[pokemon.id]"
        />
      </ul>
    </div>
  </a-skeleton>
</template>

<script>
import { mapGetters } from "vuex";

import PokemonListItem from "../components/PokemonListItem.vue";

export default {
  components: {
    PokemonListItem,
  },
  data() {
    return { current: 0, pageSize: 5, total: 150 };
  },
  computed: {
    ...mapGetters(["pokemons", "avatars", "pokemonsError", "loadingPokemons"]),
    currentId() {
      return this.$route.params.pokemonId;
    },
    page() {
      return this.current + 1;
    },
    maxPage() {
      return this.total / this.pageSize;
    },
    chunkSize() {
      return this.pageSize * 2;
    },
    currentIdx() {
      return this.current * this.pageSize;
    },
    currentPokemons() {
      return this.pokemons.slice(
        this.currentIdx,
        this.currentIdx + this.pageSize
      );
    },
  },
  created() {
    this.$store.dispatch("fetchPokemons");
    this.$store.dispatch("fetchAvatars", {
      page: this.page,
      start: this.page,
    });
  },
  methods: {
    handlePgn(current) {
      if (current > 0 && current <= this.maxPage) {
        this.current = current - 1;
        this.$store.dispatch("fetchAvatars", {
          page: current,
          start: this.current * this.chunkSize + 1,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "../styles/global.less";

.pokedex {
  width: 350px;
  position: relative;

  .sm({
    width: 600px;
  });

  .md({
    width: 750px;
  });

  .lg({
    width: 950px;


  });

  .xl({
    width: 1200px;
  });

  .pagination {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    mix-blend-mode: overlay;
    .pgn-screen-xs ();

    .pag-btns {
      button {
        background: none;
        border: none;
        height: 100%;
        border-radius: 8px;
        cursor: pointer;
        overflow: hidden;
        animation: glow 1s infinite alternate;

        &:hover {
          animation: none;
          background-color: rgba(white, 1);
        }
        &:active {
          background-color: rgba(black, 0.5);
        }
        &::selection {
          color: transparent !important;
          background: none;
        }
      }

      color: transparent;
      border-radius: 8px;
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    span {
      pointer-events: none;
    }

    .sm({
      .pgn-screen-sm ();
    });

    .md({
      .pgn-screen-md ();
    });

    .lg({
      .pgn-screen-lg ();
    });

    .xl({
      .pgn-screen-xl ();
    });
  }

  @keyframes glow {
    from {
      background-color: rgba(white, 1);
    }
    to {
      background-color: rgba(red, 1);
    }
  }
}
.pokemon-list {
  position: absolute;
  text-align: left;
  .list-screen-xs ();

  .sm({
  .list-screen-sm();
});

  .md({
  .list-screen-md();
});

  .lg({
  .list-screen-lg();
});

  .xl({
  .list-screen-xl();
});
}
.pikachu {
  position: absolute;
  display: none;

  .md({
    .pika-md ();
  });

  .lg({
    .pika-lg ();
  });

  .xl({
    .pika-xl ();
  });
}

.screen-bg {
  position: absolute;
  display: none;

  .md({
    .bg-md ();
  });

  .lg({
    .bg-lg ();
  });

  .xl({
    .bg-xl ();
  });
}
</style>
