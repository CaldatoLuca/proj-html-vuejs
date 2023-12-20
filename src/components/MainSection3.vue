<script>
import CommonSectionTitle from "../components/CommonSectionTitle.vue";
import MainSection3Card from "./MainSection3Card.vue";
export default {
  data() {
    return {
      sectionTitle: {
        titleFirst: "Portfolio",
        titleImportantSecond: "Latest",
        titleSecond: " Work",
        titleThird: "",
      },
      cards: [
        {
          title: "Purinky Products",
          src: "../assets/img/portfolio1.jpg",
          text: "Digital Experience",
        },
        {
          title: "Satisfy Poster",
          src: "../assets/img/portfolio2.jpg",
          text: "Branding Strategy",
        },
        {
          title: "Purinky Products",
          src: "../assets/img/portfolio3.jpg",
          text: "Digital Experience",
        },
        {
          title: "Satisfy Poster",
          src: "../assets/img/portfolio4.jpg",
          text: "Branding Strategy",
        },
        {
          title: "Basket of Flower on table",
          src: "../assets/img/portfolio5.jpg",
          text: "Branding Strategy",
        },
      ],
    };
  },
  components: {
    CommonSectionTitle,
    MainSection3Card,
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
        <div>1</div>
        <div>2</div>
      </div>
    </div>

    <!-- carousel -->
    <div class="carousel">
      <!-- carousel images -->
      <div class="images">
        <MainSection3Card />
      </div>

      <!-- carousel dot position -->
      <div class="dots"></div>
    </div>
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
      border-radius: 50%;
      padding: 15px;
      cursor: pointer;
    }
  }
}
</style>
