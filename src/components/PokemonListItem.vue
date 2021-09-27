<template #renderItem="{ pokemon }">
  <a-list-item
    class="pokemon-item"
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
};
</script>

<style lang="less">
@import "../styles/global.less";

.pokemon-item {
  padding: 0;
  z-index: 100;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 255, 0.356);
  }
  .ant-list-item-meta-title {
    line-height: 1;
    font-size: inherit;
    cursor: pointer;
    span {
      display: flex;
    }
  }
  .ant-list-item-meta-avatar {
    .avatar {
      position: absolute;
      left: 0;
      height: 15%;
      width: 15%;
      background: none;
      overflow: visible;
      font-size: 2%;
    }
  }
}
</style>
