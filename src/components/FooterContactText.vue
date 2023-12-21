<script>
import Logo from "./Logo.vue";
export default {
  props: ["text"],
  components: {
    Logo,
  },
};
</script>

<template>
  <!-- *contact text -->
  <div class="contact-text">
    <!-- logo -->
    <Logo />

    <!-- text -->
    <p class="text">{{ text }}</p>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
.contact-text {
  margin-right: 100px;
  .text {
    margin-top: 40px;
    width: 73%;
  }
}
</style>
