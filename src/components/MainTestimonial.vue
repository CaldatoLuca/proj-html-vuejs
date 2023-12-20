<script>
import CommonSectionTitle from "../components/CommonSectionTitle.vue";
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
    };
  },
  components: {
    CommonSectionTitle,
  },
};
</script>

<template>
  <section class="testimonial">
    <div class="container text-align-center">
      <!-- *title section -->
      <CommonSectionTitle :text="sectionTitle" />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
.testimonial {
  padding: 80px 0 30px 0;
  .section-title {
    margin-bottom: 120px;
    :deep(.third-title) {
      padding: 0 480px;
    }
  }
}
</style>
