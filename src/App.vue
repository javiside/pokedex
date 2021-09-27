<template>
  <!-- <the-header></the-header> -->
  <router-view />
</template>

<script>
// import TheHeader from "./components/TheHeader.vue";

export default {
  watch: {
    "$route.params.pokemonId"(id) {
      this.$store.dispatch({ type: "setCurrentId", id });
    },
  },
};
</script>

<style lang="less">
html {
  .pokedex,
  span,
  button {
    &::selection {
      color: black !important;
      background-color: transparent !important;
    }
  }
}
#app {
  @font-face {
    font-family: "poke";
    src: url("./assets/Pokemon.ttf") format("truetype");
  }

  font-family: poke, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 5px;

  text-align: center;
  color: #2c3e50;
  // transition: all 300ms;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 350px;

  .ant-alert {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background-color: red;
    border: 1px solid darkred;
  }
}
</style>
