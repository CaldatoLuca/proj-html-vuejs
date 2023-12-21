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
  methods: {
    selected(index) {
      if (index === 1) {
        return "dot-red";
      }
    },
  },
  // methods: {
  //   scrollRight() {
  //     this.cards.push(this.cards[0]);
  //     this.cards.splice(this.cards[0], 1);
  //   },
  // },
};
</script>

<template>
  <!-- carousel -->
  <div class="carousel relative">
    <!-- carousel images -->
    <div class="carousel-container">
      <div class="images">
        <MainPortfolioCard v-for="card in cards" :card="card" />
      </div>

      <!-- arrows -->
      <div class="arrows flex text-red absolute">
        <div @click="scrollLeft">&larr;</div>
        <div @click="scrollRight">&rarr;</div>
      </div>
    </div>
  </div>

  <!-- carousel dot position -->
  <div class="dots flex justify-content-center">
    <div class="dot" :class="selected(n)" v-for="n in cards.length"></div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

.carousel {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .carousel-container {
    overflow: hidden;
    .images {
      display: flex;
      width: 150vw;
      justify-content: center;
      gap: 20px;
      margin-bottom: 100px;
    }
  }
}
.arrows {
  align-items: end;
  gap: 30px;
  top: -150px;
  right: 200px;
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
.dots {
  gap: 10px;
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background-color: $grey;
  }
  .dot-red {
    background-color: $btn-red-dark;
  }
}
</style>
