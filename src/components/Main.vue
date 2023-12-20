<script>
import MainJumbo from "./MainJumbo.vue";
import MainSection1 from "./MainSection1.vue";
import MainSection2 from "./MainSection2.vue";
import MainSection3 from "./MainSection3.vue";
export default {
  components: {
    MainJumbo,
    MainSection1,
    MainSection2,
    MainSection3,
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

    <!-- Section 3 -->
    <MainSection3 />
  </main>
</template>

<style scoped lang="scss"></style>
