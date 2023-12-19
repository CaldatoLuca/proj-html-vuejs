<script>
import HeaderLogo from "./HeaderLogo.vue";
import HeaderNav from "./HeaderNav.vue";
export default {
  components: {
    HeaderLogo,
    HeaderNav,
  },
};
</script>

<template>
  <!-- !header -->
  <header class="text-white">
    <div class="container flex align-items-center justify-content-between">
      <!-- Logo -->
      <HeaderLogo />

      <!-- Nav -->
      <HeaderNav />
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
header {
  padding: 25px;
  background-color: $bg-blue-light;
}
</style>
