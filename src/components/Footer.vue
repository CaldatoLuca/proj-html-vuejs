<script>
import FooterSubscribe from "./FooterSubscribe.vue";
import FooterContact from "./FooterContact.vue";
import FooterSocials from "./FooterSocials.vue";
export default {
  components: {
    FooterSubscribe,
    FooterContact,
    FooterSocials,
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

    <!-- socials -->
    <FooterSocials />
  </footer>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

footer {
  background: linear-gradient(
    to top,
    $bg-blue-dark 0%,
    $bg-blue-light 80%,
    white 81%,
    white 100%
  );
}
</style>
