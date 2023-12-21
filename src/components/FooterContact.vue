<script>
import FooterContactText from "./FooterContactText.vue";
export default {
  data() {
    return {
      contactText:
        "When, while lovely valley teems vapour aroundmeand meridian sun strikes the upper impenetrable",
    };
  },
  components: {
    FooterContactText,
  },
};
</script>

<template>
  <div class="contacts">
    <div class="container">
      <!-- first component -->
      <FooterContactText :text="contactText" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

.contacts {
  color: rgba(234, 234, 234, 0.6);
  margin-bottom: 70px;
}
</style>
