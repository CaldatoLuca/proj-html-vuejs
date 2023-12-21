<script>
import FooterSubscribe from "./FooterSubscribe.vue";
export default {
  components: {
    FooterSubscribe,
  },
};
</script>

<template>
  <!-- !footer -->
  <footer>
    <!-- Subscribe -->
    <FooterSubscribe />

    <div>c</div>
    <div>c</div>
    <div>c</div>
    <div>c</div>
    <div>c</div>
    <div>c</div>
  </footer>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

footer {
  background: linear-gradient(
    to top,
    $bg-blue-dark 0%,
    $bg-blue-light 55%,
    white 56%,
    white 100%
  );
}
</style>
