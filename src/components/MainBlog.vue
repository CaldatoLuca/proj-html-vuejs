<script>
import CommonSectionTitle from "../components/CommonSectionTitle.vue";
import MainBlogCard from "./MainBlogCard.vue";
import MainBlogMainCard from "./MainBlogMainCard.vue";
export default {
  data() {
    return {
      sectionTitle: {
        titleFirst: "Blog",
        titleImportantSecond: "Latest",
        titleSecond: " Posts",
        titleThird:
          "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface.",
      },
      mainCard: {
        date: "April 21, 2019 ",
        author: "Paul",
        title: "Amazon gets CCI nod to acquire 49% stake in",
        text: "When, while the lovely valley teems with vapour around me, and the meridian sun s ...",
        btn: {
          text: "Read More",
          type: "btn-white",
          arrow: false,
        },
      },
      cards: [
        {
          date: "April 21, 2019 ",
          author: "Paul",
          title:
            "Clearing Corporations get SEBI nod to invest in overnight funds",
          text: "When, while the lovely valley teems with vapour around me, and the meridian sun s ...",
          btn: {
            text: "Read More",
            type: "btn-white",
            arrow: false,
          },
        },
        {
          date: "April 21, 2019 ",
          author: "Paul",
          title:
            "Shabnam Dhilion, wife of RSSB chief Gurinder Dhilion, passes away in London",
          text: "When, while the lovely valley teems with vapour around me, and the meridian sun s ...",
          btn: {
            text: "Read More",
            type: "btn-white",
            arrow: false,
          },
        },
      ],
    };
  },
  components: {
    CommonSectionTitle,
    MainBlogCard,
    MainBlogMainCard,
  },
};
</script>

<template>
  <section class="blog">
    <div class="container text-align-center">
      <!-- *title section -->
      <CommonSectionTitle :text="sectionTitle" />

      <!-- *Cards -->
      <div class="blog-cards flex justify-content-around">
        <MainBlogMainCard :card="mainCard" />
        <MainBlogCard v-for="card in cards" :card="card" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
.blog {
  padding: 90px 0 80px 0;
  .section-title {
    margin-bottom: 115px;
    :deep(.third-title) {
      padding: 0 480px;
    }
  }
}
</style>
