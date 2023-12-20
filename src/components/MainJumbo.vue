<script>
import CommonTitleTextBtns from "./CommonTitleTextBtns.vue";
export default {
  data() {
    return {
      commonTitleTextBts: {
        title1: "Business Planning",
        title2: "Digital Technology",
        title3: "Modern Solution !",
        textBlue:
          " When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface.",
      },
    };
  },
  components: {
    CommonTitleTextBtns,
  },
};
</script>

<template>
  <section class="jumbo">
    <div class="container flex justify-content-between align-items-center">
      <!-- *left part -->
      <div class="left-jumbo">
        <CommonTitleTextBtns :text="commonTitleTextBts" />
      </div>

      <!-- *right part image -->
      <div class="right-jumbo">
        <img src="../assets/img/header.png" alt="Jumbo image" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
.jumbo {
  padding: 15px 0 190px 0;
  background: linear-gradient(0deg, $bg-blue-dark 0%, $bg-blue-light 100%);
  .left-jumbo {
    width: 27%;
    :deep(.title) {
      margin-bottom: 60px;
    }
    :deep(.text-blue) {
      margin-bottom: 70px;
    }
  }
  .right-jumbo {
    width: 50%;
  }
}
</style>
