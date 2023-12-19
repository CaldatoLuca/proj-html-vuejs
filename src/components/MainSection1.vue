<script>
import CommonSectionTitle from "./CommonSectionTitle.vue";
export default {
  data() {
    return {
      sectionTitle: {
        titleFirst: "Our Services",
        titleImportantSecond: "What",
        titleSecond: " We Do",
        titleThird:
          "When, while the lovely valley teems with vapour around the",
      },
    };
  },
  components: {
    CommonSectionTitle,
  },
};
</script>

<template>
  <section class="our-services">
    <div class="container text-align-center">
      <!-- *title section -->
      <CommonSectionTitle :text="sectionTitle" />

      <!-- *Cards -->
      <div class="section-title"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.our-services {
  padding: 80px 0 100px 0;
}
</style>
