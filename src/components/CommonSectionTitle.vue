<script>
export default {
  props: ["text"],
};
</script>

<template>
  <div class="section-title">
    <!-- title 1 -->
    <div class="text-red first-title">{{ text.titleFirst }}</div>

    <!-- title 2 -->
    <h2 class="second-title">
      {{ text.titleImportantSecond }}
      <span class="fw-n">{{ text.titleSecond }}</span>
    </h2>

    <!-- title 3 -->
    <div class="third-title">{{ text.titleThird }}</div>
  </div>
</template>

<style scoped lang="scss">
.first-title,
.second-title {
  margin-bottom: 25px;
}
</style>
