<script>
import MainJumbo from "./MainJumbo.vue";
import MainSection1 from "./MainSection1.vue";
import MainSection2 from "./MainSection2.vue";
export default {
  components: {
    MainJumbo,
    MainSection1,
    MainSection2,
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

    <!-- Section 2 -->
    <MainSection2 />
  </main>
</template>

<style scoped lang="scss"></style>
