<script>
import CommonSectionTitle from "../components/CommonSectionTitle.vue";
import MainPortfolioCard from "./MainPortfolioCard.vue";
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
          src: "../assets/img/portfolio3.jpg",
          text: "Branding Strategy",
        },
      ],
    };
  },
  components: {
    CommonSectionTitle,
    MainPortfolioCard,
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

    <!-- carousel -->
    <div class="carousel">
      <!-- carousel images -->
      <div class="images">
        <MainPortfolioCard v-for="card in cards" :card="card" />
      </div>

      <!-- carousel dot position -->
      <div class="dots flex justify-content-center">
        <div class="dot" v-for="n in cards.length"></div>
      </div>
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
      border-radius: 40px;
      width: 50px;
      height: 50px;
      cursor: pointer;
      font-size: 25px;
      text-align: center;
      line-height: 50px;
    }
  }
  .carousel {
    width: 100%;
    display: block;
    overflow: hidden;

    .images {
      display: block;
      width: 100%;
      background: white;

      margin: 0;
      white-space: nowrap;
      margin-bottom: 100px;
    }
    .dots {
      gap: 10px;

      .dot {
        width: 10px;
        height: 10px;
        border-radius: 50px;
        background-color: $grey;
      }
    }
  }
}
</style>
