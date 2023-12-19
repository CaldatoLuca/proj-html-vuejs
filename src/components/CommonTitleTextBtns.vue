<script>
export default {
  props: ["text"],
};
</script>

<template>
  <!-- title -->
  <div class="title text-white">
    <h1>
      {{ text.title1 }}
      <span class="fw-n">{{ text.title2 }}</span>
      {{ text.title3 }}
    </h1>
  </div>

  <!-- blue text -->
  <div class="text-blue">
    {{ text.textBlue }}
  </div>

  <!-- buttons -->
  <div class="buttons">
    <button class="btn btn-red">{{ text.btn1 }}</button>
    <button class="btn btn-blue">{{ text.btn2 }}</button>
  </div>
</template>

<style scoped>
.btn-red {
  margin-right: 25px;
}
</style>
