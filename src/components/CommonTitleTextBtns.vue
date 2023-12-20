<script>
import CommonBtn from "./CommonBtn.vue";

export default {
  data() {
    return {
      btn1: {
        text: "Try It Now",
        type: "btn-red",
      },
      btn2: {
        text: "Explore More",
        type: "btn-blue",
      },
    };
  },
  props: ["text"],
  components: {
    CommonBtn,
  },
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
    <CommonBtn :text="btn1.text" :type="btn1.type" />
    <CommonBtn :text="btn2.text" :type="btn2.type" />
  </div>
</template>

<style scoped>
.btn-red {
  margin-right: 25px;
}
</style>
