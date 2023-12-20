<script>
import CommonSectionTitle from "../components/CommonSectionTitle.vue";
import MainPriceListCard from "./MainPriceListCard.vue";
export default {
  data() {
    return {
      sectionTitle: {
        titleFirst: "Price List",
        titleImportantSecond: "Our",
        titleSecond: " Pricing",
        titleThird:
          "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface.",
      },
      cards: [
        {
          title: "Designing",
          subtitle: "process",
          price: "40",
          time: "Per Month",
          functions: [
            {
              function: "Creative ",
              functionDescription: "Design Enabled",
            },
            {
              function: "Vibrant ",
              functionDescription: "Color Usage",
            },
            {
              function: "Eye ",
              functionDescription: "Catching Design",
            },
            {
              function: "Extreme ",
              functionDescription: "Typhography",
            },
            {
              function: "Exceptional ",
              functionDescription: "Design ",
            },
          ],
          background: "card-white",
          btn: {
            text: "Order Now",
            type: "btn-red",
            arrow: true,
          },
        },
        {
          title: "Developing",
          subtitle: "product",
          price: "60",
          time: "Per Month",
          functions: [
            {
              function: "Creative ",
              functionDescription: "Design Enabled",
            },
            {
              function: "Vibrant ",
              functionDescription: "Color Usage",
            },
            {
              function: "Eye ",
              functionDescription: "Catching Design",
            },
            {
              function: "Extreme ",
              functionDescription: "Typhography",
            },
            {
              function: "Exceptional ",
              functionDescription: "Design ",
            },
          ],
          background: "card-red",
          btn: {
            text: "Order Now",
            type: "btn-white",
            arrow: true,
          },
        },
        {
          title: "Supporting",
          subtitle: "clients",
          price: "80",
          time: "Per Month",
          functions: [
            {
              function: "Creative ",
              functionDescription: "Design Enabled",
            },
            {
              function: "Vibrant ",
              functionDescription: "Color Usage",
            },
            {
              function: "Eye ",
              functionDescription: "Catching Design",
            },
            {
              function: "Extreme ",
              functionDescription: "Typhography",
            },
            {
              function: "Exceptional ",
              functionDescription: "Design ",
            },
          ],
          background: "card-white",
          btn: {
            text: "Order Now",
            type: "btn-red",
            arrow: true,
          },
        },
      ],
    };
  },
  components: {
    CommonSectionTitle,
    MainPriceListCard,
  },
};
</script>

<template>
  <section class="price-list text-white">
    <div class="container text-align-center">
      <!-- *title section -->
      <CommonSectionTitle :text="sectionTitle" />

      <!-- *Cards -->
      <div class="price-list-cards flex justify-content-around">
        <MainPriceListCard v-for="card in cards" :card="card" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
.price-list {
  padding: 75px 0;
  background: linear-gradient(
    to bottom,
    $bg-blue-dark 0%,
    $bg-blue-light 55%,
    white 56%,
    white 100%
  );
  .section-title {
    margin-bottom: 85px;
    :deep(.third-title) {
      padding: 0 480px;
    }
  }
}
</style>
