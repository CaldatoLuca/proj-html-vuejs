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
  <section class="start-your-project">
    <div class="container flex justify-content-around align-items-center">
      <!-- *left part -->
      <div class="left-syp">
        <div>immagine</div>
      </div>

      <!-- *right part image -->
      <div class="right-syp">
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
  }
  .right-syp {
    width: 30%;
    :deep(.title) {
      margin-bottom: 55px;
    }
    :deep(.text-blue) {
      margin-bottom: 55px;
    }
  }
}
</style>
