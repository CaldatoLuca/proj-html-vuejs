<script>
export default {
  props: ["text"],
};
</script>

<template>
  <div class="text-red first-title">{{ text.titleFirst }}</div>
  <h2 class="second-title">
    {{ text.titleImportantSecond }}
    <span class="fw-n">{{ text.titleSecond }}</span>
  </h2>
  <div class="third-title">{{ text.titleThird }}</div>
</template>

<style scoped lang="scss">
.first-title,
.second-title {
  margin-bottom: 25px;
}
</style>
