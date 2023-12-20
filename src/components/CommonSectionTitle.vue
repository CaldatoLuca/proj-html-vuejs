<script>
export default {
  props: ["text"],
};
</script>

<template>
  <div class="section-title">
    <!-- title 1 -->
    <div v-if="text.titleFirst !== ''" class="text-red first-title">
      {{ text.titleFirst }}
    </div>

    <!-- title 2 -->
    <h2 v-if="text.titleSecond !== ''" class="second-title">
      {{ text.titleImportantSecond }}
      <span class="fw-n">{{ text.titleSecond }}</span>
    </h2>

    <!-- title 3 -->
    <div v-if="text.titleThird !== ''" class="third-title">
      {{ text.titleThird }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.first-title,
.second-title {
  margin-bottom: 15px;
}
</style>
