<script>
export default {
  props: ["text"],
};
</script>

<template>
  <!-- title -->
  <div class="title text-white">
    <h1 v-if="text.title1 !== ''">{{ text.title1 }}</h1>
    <h1 v-if="text.title2 !== ''" class="fw-n">{{ text.title2 }}</h1>
    <h1 v-if="text.title3 !== ''">{{ text.title3 }}</h1>
  </div>

  <!-- blue text -->
  <p class="text-blue">
    {{ text.textBlue }}
  </p>

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
