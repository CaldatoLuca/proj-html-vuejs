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
    <!-- section title and arrows -->
    <div class="container flex justify-content-between">
      <!-- title -->
      <CommonSectionTitle :text="sectionTitle" />

      <!-- arrows -->
      <div class="arrows flex text-red">
        <div>&larr;</div>
        <div>&rarr;</div>
      </div>
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
  .arrows {
    align-items: end;
    gap: 30px;
    div {
      border: 1px solid $text-red;
      border-radius: 40px;
      width: 50px;
      height: 50px;
      cursor: pointer;
      font-size: 25px;
      text-align: center;
      line-height: 50px;
    }
  }
}
</style>
