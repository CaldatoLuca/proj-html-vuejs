<script>
import CommonSectionTitle from "./CommonSectionTitle.vue";
import MainSection1Card from "./MainSection1Card.vue";
import CommonBtn from "./CommonBtn.vue";
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
      btn: {
        text: "View All Services",
        type: "btn-red",
      },
    };
  },
  components: {
    CommonSectionTitle,
    MainSection1Card,
    CommonBtn,
  },
};
</script>

<template>
  <section class="our-services">
    <div class="container text-align-center flex flex-column">
      <!-- *title section -->
      <CommonSectionTitle :text="sectionTitle" />

      <!-- *Cards -->
      <div class="our-services-cards flex justify-content-around">
        <MainSection1Card v-for="card in cards" :card="card" />
      </div>
    </div>

    <!-- *button -->
    <div class="text-align-center">
      <CommonBtn :text="btn.text" :type="btn.type" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
.our-services {
  padding: 70px 0 90px 0;
  .our-services-cards {
    margin: 100px 0 150px 0;

    .card {
      width: 15%;
    }
  }
}
.btn-red {
  box-shadow: 0px 0px 110px 1px $btn-red-light;
}
.btn-red:hover {
  background: linear-gradient(90deg, $btn-blue-light 3%, $btn-blue-dark 100%);
  box-shadow: 0px 0px 110px 1px $btn-blue-light;
}
</style>
