<script>
import MainJumbo from "./MainJumbo.vue";
import MainOurServices from "./MainOurServices.vue";
import MainStartYourProject from "./MainStartYourProject.vue";
import MainPortfolio from "./MainPortfolio.vue";
import MainPriceList from "./MainPriceList.vue";
export default {
  components: {
    MainJumbo,
    MainOurServices,
    MainStartYourProject,
    MainPortfolio,
    MainPriceList,
  },
};
</script>

<template>
  <!-- !main -->
  <main>
    <!-- jumbotron -->
    <MainJumbo />

    <!-- Section 1 -->
    <MainOurServices />

    <!-- Section 2 -->
    <MainStartYourProject />

    <!-- Section 3 -->
    <MainPortfolio />

    <!-- Section 4 -->
    <MainPriceList />
  </main>
</template>

<style scoped lang="scss"></style>
