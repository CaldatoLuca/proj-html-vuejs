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
    <div class="flex">
      <!-- text -->
      <div class="text">{{ card.text }}</div>

      <!-- button -->
      <CommonBtn
        :text="card.btn.text"
        :type="card.btn.type"
        :arrow="card.btn.arrow"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

.card {
  width: 50%;
  padding: 0 30px 40px 50px;
  border-radius: 30px;
  background-image: url(../assets/img/blog-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  text-align: start;
  height: 450px;

  .date-author {
    margin-bottom: 20px;
    margin-top: auto;
  }
  .title {
    margin-bottom: 25px;
  }
  .btn {
    margin-left: 100px;
    width: 40%;
  }
}
</style>
