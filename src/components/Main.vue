<script>
import MainJumbo from "./MainJumbo.vue";
import MainSection1 from "./MainSection1.vue";
export default {
  components: {
    MainJumbo,
    MainSection1,
  },
};
</script>

<template>
  <!-- !main -->
  <main>
    <!-- jumbotron -->
    <MainJumbo />

    <!-- Section 1 -->
    <MainSection1 />
  </main>
</template>

<style scoped lang="scss"></style>
