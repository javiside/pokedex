<template>
  <nav class="nav">
    <a-breadcrumb separator=">">
      <a-breadcrumb-item>
        <router-link v-if="pokemonName" to="/">Pokemons</router-link>
        <span v-else>Pokemons</span>
      </a-breadcrumb-item>
      <a-breadcrumb-item v-if="pokemonName">
        <span>{{ pokemonName }}</span>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <span class="nav-actions" v-if="!pokemonName">
      <a-input
        v-model:value="inputValue"
        placeholder="Search by name, pokemonName or email"
      />

      <a-select ref="select" v-model:value="selectValue">
        <a-select-option value="name">Name</a-select-option>
        <a-select-option value="pokemonName">PokemonName</a-select-option>
        <a-select-option value="email">Email</a-select-option>
      </a-select>
    </span>
  </nav>
</template>
<script>
import { Breadcrumb, Select, Input } from "ant-design-vue";
const { Item } = Breadcrumb;
const { Option } = Select;

export default {
  components: {
    "a-breadcrumb": Breadcrumb,
    "a-breadcrumb-item": Item,
    "a-select": Select,
    "a-select-option": Option,
    "a-input": Input,
  },
  data() {
    return {
      inputValue: "",
      selectValue: "name",
    };
  },
  computed: {
    pokemonName() {
      return this.$store.getters.currentPokemonUrl;
    },
  },
  watch: {
    inputValue(searchVal) {
      this.$store.dispatch({ type: "filterPokemons", searchVal });
      this.$store.dispatch({
        type: "sortPokemons",
        selected: this.selectValue,
      });
    },
    selectValue(selected) {
      this.$store.dispatch({ type: "sortPokemons", selected });
    },
    "$route.params.pokemonId"(id) {
      this.$store.dispatch({ type: "setCurrentId", id });
    },
  },
};
</script>

<style lang="less">
@import "../styles/global.less";

.nav {
  position: static;
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  flex-shrink: 0;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
  background-color: #3f51b5;
  width: 100%;
  z-index: 1100;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  min-height: 64px;
  padding: 0 20px;

  .nav-actions {
    display: flex;
    flex-flow: column;
    flex-grow: 1;
    align-items: center;
  }
  .ant-breadcrumb {
    flex-grow: 8;
    text-align: left;
    font-size: 2rem;
    &-link,
    &-separator {
      color: #bbcbe4;
    }
    a {
      color: #fff;
      text-decoration: underline;
    }
  }
  .ant-input {
    background-color: #5060be;
    border-color: #152061;
    color: white;
  }
  .ant-select {
    width: 100%;

    .ant-select-selector {
      background-color: #374591;
      border-color: #152061;
      color: white;
    }
  }

  .md({ 
    flex-flow: row;

    .nav-actions {
    flex-flow: row;
    justify-content: space-between;

    .ant-input {
    flex-grow: 8;
    width: auto;
    margin-right: 10px;

    }
    .ant-select {
      width: auto;
      flex-grow: 2;
    }
  }
  });
}
</style>
