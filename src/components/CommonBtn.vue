<script>
export default {
  props: ["text", "type"],
};
</script>

<template>
  <button class="btn" :class="type">{{ text }}</button>
</template>

<style scoped lang="scss"></style>
