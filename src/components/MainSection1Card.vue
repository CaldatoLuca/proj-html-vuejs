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
  <div class="card">
    <div class="card-img">
      <img :src="getImagePath(card.src)" :alt="card.title" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
