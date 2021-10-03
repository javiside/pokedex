<template>
  <a-alert
    v-if="this.infoError"
    message="Error"
    type="error"
    :description="this.infoError"
    show-icon
  />
  <base-card v-else-if="currentPokemon" :info="currentPokemon" />
</template>

<script>
import { mapGetters } from "vuex";
import BaseCard from "../components/BaseCard.vue";

export default {
  components: {
    BaseCard,
  },
  data() {
    return {
      fetchedPokemonType: [],
    };
  },
  computed: {
    ...mapGetters([
      "loadingInfo",
      "infoError",
      "currentPokemon",
      "loadingPosts",
      "pokemonTypeError",
    ]),
  },
  methods: {
    fetchInfo(id) {
      this.$store.dispatch({
        type: "fetchPokemonInfo",
        id,
      });
    },
  },
  watch: {
    "$route.params.pokemonId"(id) {
      this.fetchInfo(id);
    },
  },
  created() {
    this.fetchInfo(this.$route.params.pokemonId);
  },
};
</script>
