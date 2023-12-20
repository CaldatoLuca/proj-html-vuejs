<script>
import CommonBtn from "./CommonBtn.vue";
export default {
  props: ["card"],
  components: {
    CommonBtn,
  },
};
</script>

<template>
  <div class="card text-white flex flex-column">
    <!-- card date and author -->
    <div class="date-author">{{ card.date }} &#x2022; {{ card.author }}</div>

    <!-- card title -->
    <h3 class="title">{{ card.title }}</h3>

    <!-- card text and button -->

    <!-- text -->
    <div class="text">{{ card.text }}</div>

    <!-- button -->
    <CommonBtn
      :text="card.btn.text"
      :type="card.btn.type"
      :arrow="card.btn.arrow"
    />
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

.card {
  background: linear-gradient(135deg, $bg-blue-dark 25%, $bg-blue-light 100%);
  border-radius: 30px;
  width: 20%;
  text-align: start;
  height: 450px;

  padding: 50px;
  .date-author {
    margin-bottom: 30px;
  }
  .title {
    margin-bottom: 40px;
  }
  .btn {
    margin-top: auto;
    width: 75%;
  }
}
</style>
