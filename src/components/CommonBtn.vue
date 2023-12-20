<script>
export default {
  props: ["text", "type", "arrow"],
};
</script>

<template>
  <button class="btn" :class="type">
    <span>{{ text }}</span>
    <div v-if="arrow" class="arrow">&rarr;</div>
  </button>
</template>

<style scoped lang="scss">
.arrow {
  margin-left: 40px;
  font-size: 35px;
}
</style>
