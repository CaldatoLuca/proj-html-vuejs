<script>
export default {
  props: ["client"],

  methods: {
    getImagePath: function (imgPath) {
      return new URL(imgPath, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="client flex align-items-center">
    <img :src="getImagePath(client.src)" :alt="client.name" />
  </div>
</template>

<style scoped lang="scss">
.client {
  width: 115px;
  height: 80px;
}
</style>
