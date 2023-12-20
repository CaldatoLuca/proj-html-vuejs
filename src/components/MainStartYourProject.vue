<script>
import CommonTitleTextBtns from "./CommonTitleTextBtns.vue";
export default {
  data() {
    return {
      commonTitleTextBts: {
        title1: "Grow Your Business",
        title2: "With Our Strategy",
        textBlue:
          " When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface. of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary",
        btn1: "Try It Now",
        btn2: "Explore More",
      },
    };
  },
  components: {
    CommonTitleTextBtns,
  },
};
</script>

<template>
  <section class="start-your-project text-white">
    <div class="container flex justify-content-around align-items-center">
      <!-- *left part -->
      <div class="left-syp relative">
        <img class="men-data" src="../assets/img/men-data.png" alt="Men Data" />
      </div>

      <!-- *right part image -->
      <div class="right-syp">
        <!-- section title -->
        <div class="section-title">Start Your Project</div>

        <!-- section text -->
        <CommonTitleTextBtns :text="commonTitleTextBts" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
.start-your-project {
  padding: 110px 0 150px 0;
  background: linear-gradient(0deg, $bg-blue-dark 0%, $bg-blue-light 100%);
  .left-syp {
    width: 30%;
    background-image: url(../assets/img/nemoodar.png);
    background-repeat: no-repeat;
    background-position: 160% 10%;
  }
  .right-syp {
    width: 30%;
    .section-title {
      margin-bottom: 40px;
    }
    :deep(.title) {
      margin-bottom: 45px;
    }
    :deep(.text-blue) {
      margin-bottom: 45px;
    }
  }
}
</style>
