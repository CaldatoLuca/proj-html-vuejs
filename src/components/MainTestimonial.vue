<script>
import CommonSectionTitle from "../components/CommonSectionTitle.vue";
import MainTestimonialCard from "./MainTestimonialCard.vue";
import MainTestimonialClient from "./MainTestimonialClient.vue";
export default {
  data() {
    return {
      sectionTitle: {
        titleFirst: "Testimonial",
        titleImportantSecond: "What",
        titleSecond: " People Say",
        titleThird:
          "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface.",
      },
      cards: [
        {
          src: "../assets/img/testimonial1.png",
          text: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper impenetrable foliage of my trees, and but a thusand.",
          author: "Michkel Anegl",
          role: "Marketing Managment",
          vote: 3,
        },
        {
          src: "../assets/img/testimonial2.png",
          text: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper impenetrable foliage of my trees, and but a thusand.",
          author: "Michkel Anegl",
          role: "Marketing Managment",
          vote: 3,
        },
        {
          src: "../assets/img/testimonial3.png",
          text: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper impenetrable foliage of my trees, and but a thusand.",
          author: "Michkel Anegl",
          role: "Marketing Managment",
          vote: 3,
        },
      ],
      clients: [
        {
          src: "../assets/img/client1.png",
          name: "Golden",
        },
        {
          src: "../assets/img/client2.png",
          name: "Sweety",
        },
        {
          src: "../assets/img/client3.png",
          name: "Fastlane",
        },
        {
          src: "../assets/img/client4.png",
          name: "Mighty Fornitures",
        },
        {
          src: "../assets/img/client5.png",
          name: "Jack Roller",
        },
      ],
    };
  },
  components: {
    CommonSectionTitle,
    MainTestimonialCard,
    MainTestimonialClient,
  },
};
</script>

<template>
  <section class="testimonial">
    <div class="container text-align-center">
      <!-- *title section -->
      <CommonSectionTitle :text="sectionTitle" />

      <!-- *section cards -->
      <div class="testimonial-cards flex justify-content-around">
        <MainTestimonialCard v-for="card in cards" :card="card" />
      </div>

      <!-- *sponsor -->
      <div class="sponsors flex justify-content-around">
        <MainTestimonialClient v-for="client in clients" :client="client" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
.testimonial {
  padding: 80px 0 130px 0;
  .section-title {
    margin-bottom: 120px;
    :deep(.third-title) {
      padding: 0 480px;
    }
  }
}
</style>
