<script>
import CommonSectionTitle from "../components/CommonSectionTitle.vue";
import MainPortfolioCarousel from "./MainPortfolioCarousel.vue";
export default {
  data() {
    return {
      sectionTitle: {
        titleFirst: "Portfolio",
        titleImportantSecond: "Latest",
        titleSecond: " Work",
        titleThird: "",
      },
    };
  },
  components: {
    CommonSectionTitle,
    MainPortfolioCarousel,
  },
};
</script>

<template>
  <section class="portfolio">
    <!-- section title  -->
    <div class="container">
      <!-- title -->
      <CommonSectionTitle :text="sectionTitle" />
    </div>

    <MainPortfolioCarousel />
  </section>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

.portfolio {
  padding: 120px 0 60px 0;
  .container {
    margin-bottom: 100px;
  }
}
</style>
