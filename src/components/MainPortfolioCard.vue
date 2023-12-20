<script>
export default {
  props: ["card"],
  methods: {
    getImagePath: function (imgPath) {
      return new URL(imgPath, import.meta.url).href;
    },
  },
};
</script>

<template>
  <!-- card -->
  <div class="card">
    <!-- card image -->
    <div class="card-img">
      <img :src="getImagePath(card.src)" :alt="card.title" />
    </div>

    <div class="card-text flex justify-content-between">
      <!-- card main title -->
      <div class="fw-b">{{ card.title }}</div>

      <!-- card text -->
      <div>{{ card.text }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: inline-block;
  width: 450px;
  margin: 0 50px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  img {
    border-radius: 30px;
  }
  .card-text {
    padding: 30px;
  }
}
</style>
