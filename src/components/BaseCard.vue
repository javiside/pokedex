<template>
  <div class="id">{{ info.id }}</div>
  <div class="name">{{ pokemonName }}</div>
  <ul class="types">
    <li
      class="type-item"
      v-for="type in info.types"
      :style="{ background: typeColor[type] }"
      :key="type"
    >
      {{ type }}
    </li>
  </ul>
  <img class="current-pokemon" v-if="url" :src="url" alt="current-pokemon" />
</template>

<script>
export default {
  props: ["info"],
  computed: {
    pokemonName() {
      return this.$store.getters.pokemonNames;
    },
    url() {
      return require(`../assets/pokemon/${this.info.id}.gif`);
      // return this.$store.getters.avatars[this.info.id];
    },
    typeColor() {
      return {
        normal: "#A8A878",
        fire: "#F08030",
        fighting: "#C03028",
        water: "#6890F0",
        flying: "#A890F0",
        grass: "#78C850",
        poison: "#A040A0",
        electric: "#F8D030",
        ground: "#E0C068",
        psychic: "#F85888",
        rock: "#B8A038",
        ice: "#98D8D8",
        bug: "#A8B820",
        dragon: "#7038F8",
        ghost: "#705898",
        dark: "#705848",
        steel: "#B8B8D0",
        fairy: "#EE99AC",
      };
    },
  },
};
</script>

<style lang="less">
@import "../styles/global.less";
.current-pokemon,
.id {
  position: absolute;

  .poke-xs ();

  .sm({
    .poke-sm ();
  });

  .md({
    .poke-md ();
  });

  .lg({
    .poke-lg ();
  });

  .xl({
    .poke-xl ();
  });
}

.id {
  transform: rotate(2.5deg) translate(-10px);
}

.name {
  position: absolute;
  .name-xs ();

  .sm({
    .name-sm ();
  });

  .md({
    .name-md ();
  });

  .lg({
    .name-lg ();
  });

  .xl({
    .name-xl ();
  });
}

.types {
  display: flex;
  position: absolute;
  color: white;
  text-shadow: 1px 1px 1px black;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  .type-xs ();

  .sm({
    .type-sm ();
  });

  .md({
    .type-md ();
  });

  .lg({
    .type-lg ();
  });

  .xl({
    .type-xl ();
  });

  .type-item {
    list-style: none;
    border-radius: 20px;
    font-size: 10px;
    min-width: 0;
    font-size: 5px;
    letter-spacing: 1px;
    filter: opacity(0.8);
    .sm({
      font-size: 9px;
      letter-spacing: 2px;
    });

    .lg({
      font-size: 12px;
      letter-spacing: 4px;
  });
  }
}
</style>
