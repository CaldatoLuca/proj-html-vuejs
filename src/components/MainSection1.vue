<script>
import CommonSectionTitle from "./CommonSectionTitle.vue";
import MainSection1Card from "./MainSection1Card.vue";
export default {
  data() {
    return {
      sectionTitle: {
        titleFirst: "Our Services",
        titleImportantSecond: "What",
        titleSecond: " We Do",
        titleThird:
          "When, while the lovely valley teems with vapour around meand the",
      },
      cards: [
        {
          title: "Data Analysis",
          src: "../assets/img/Group-247.png",
          text: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
        },
        {
          title: "SEO Optimization",
          src: "../assets/img/Group-567.png",
          text: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
        },
        {
          title: "Security Data",
          src: "../assets/img/Group-538.png",
          text: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
        },
        {
          title: "Branding Strategy",
          src: "../assets/img/Group-566.png",
          text: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
        },
      ],
    };
  },
  components: {
    CommonSectionTitle,
    MainSection1Card,
  },
};
</script>

<template>
  <section class="our-services">
    <div class="container text-align-center">
      <!-- *title section -->
      <CommonSectionTitle :text="sectionTitle" />

      <!-- *Cards -->
      <div class="our-services-cards flex justify-content-around">
        <MainSection1Card v-for="card in cards" :card="card" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.our-services {
  padding: 80px 0 100px 0;
  .our-services-cards {
    margin: 160px 0 215px 0;
    .card {
      width: 15%;
    }
  }
}
</style>
