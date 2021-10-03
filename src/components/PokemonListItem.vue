<template #renderItem="{ pokemon }">
  <a-list-item
    class="pokemon-item"
    :class="{ active: pokemon.id === currentId }"
    @click="this.$router.push(`/${pokemon.id}`)"
  >
    <a-list-item-meta :description="pokemon.pokemonName">
      <template #avatar>
        <a-avatar class="avatar" :src="avatarUrl" />
      </template>
      <template #title>
        <span>{{ pokemon.id }}. {{ pokemon.name }}</span>
      </template>
    </a-list-item-meta>
  </a-list-item>
</template>

<script>
import { List, Avatar } from "ant-design-vue";
const {
  Item: { Meta },
  Item,
} = List;
export default {
  components: {
    "a-list-item": Item,
    "a-list-item-meta": Meta,
    "a-avatar": Avatar,
  },
  props: ["pokemon", "avatarUrl"],
  computed: {
    currentId() {
      return this.$route.params.pokemonId;
    },
  },
};
</script>

<style lang="less">
@import "../styles/global.less";

.pokemon-item {
  z-index: 100;
  cursor: pointer;
  border-radius: 10px;
  padding: 0;

  &.active {
    animation: glow 1s infinite alternate;
  }

  &:hover {
    background: rgba(0, 0, 255, 0.356);
    animation: none;
  }
  .ant-list-item-meta-title {
    line-height: 1;
    font-size: inherit;
    cursor: pointer;
    margin: 0;
    span {
      display: flex;
      padding: 1.8px 0;
    }
  }
  .ant-list-item-meta-avatar {
    .avatar {
      position: absolute;
      left: 0;
      height: 26%;
      width: 15%;
      background: none;
      overflow: visible;
      font-size: 2%;

      & > img {
        object-fit: contain;
      }
    }
  }
}
</style>
