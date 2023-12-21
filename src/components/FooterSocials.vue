<script>
import Copyright from "./Copyright.vue";
import Socials from "./Socials.vue";

export default {
  components: {
    Copyright,
    Socials,
  },
};
</script>

<template>
  <!-- socials -->
  <div class="footer-socials">
    <div class="container flex justify-content-between">
      <!-- copyright -->
      <Copyright />

      <!-- socials list -->
      <Socials />
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-socials {
  padding: 40px 0 30px 0;
}
</style>
