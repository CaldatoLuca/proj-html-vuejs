<script>
export default {
  methods: {
    scrollUp() {
      window.scrollTo({
        top: 0,
        left: 0,
      });
    },
  },
};
</script>

<template>
  <!-- scroll up -->
  <button
    @click="scrollUp"
    class="scroll-up flex justify-content-center align-items-center"
  >
    <span>&uarr;</span>
  </button>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
.scroll-up {
  position: fixed;
  right: 120px;
  bottom: 66px;
  background-color: white;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  font-size: 15px;
  border: none;
}
</style>
