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

    <!-- card main title -->
    <h3>{{ card.title }}</h3>

    <!-- card text -->
    <p>{{ card.text }}</p>
  </div>
</template>

<style scoped lang="scss">
.card-img {
  margin-bottom: 60px;
  img {
    object-fit: contain;
    height: 180px;
  }
}
h3 {
  margin-bottom: 40px;
}
</style>
