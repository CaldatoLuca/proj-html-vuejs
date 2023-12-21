<script>
import FooterSubscribe from "./FooterSubscribe.vue";
import FooterContact from "./FooterContact.vue";
export default {
  components: {
    FooterSubscribe,
    FooterContact,
  },
};
</script>

<template>
  <!-- !footer -->
  <footer>
    <!-- Subscribe -->
    <FooterSubscribe />

    <!-- contacts -->
    <FooterContact />
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
