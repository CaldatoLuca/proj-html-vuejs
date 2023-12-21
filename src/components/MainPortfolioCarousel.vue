<script>
import MainPortfolioCard from "./MainPortfolioCard.vue";
export default {
  data() {
    return {
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
    MainPortfolioCard,
  },
};
</script>

<template>
  <!-- carousel -->
  <div class="carousel">
    <!-- carousel images -->
    <div class="images">
      <MainPortfolioCard v-for="card in cards" :card="card" />
    </div>
  </div>

  <!-- carousel dot position -->
  <div class="dots flex justify-content-center">
    <div class="dot" v-for="n in cards.length"></div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

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
</style>
