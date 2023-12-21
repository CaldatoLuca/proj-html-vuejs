<script>
import FooterSubscribeInput from "./FooterSubscribeInput.vue";
export default {
  components: {
    FooterSubscribeInput,
  },
};
</script>

<template>
  <div
    class="subscribe container flex justify-content-between align-items-center"
  >
    <!-- title -->
    <div class="title text-white">
      <h1>We Offer Awesome Services</h1>
      <p>
        When, while the lovely valley teems with vapour around meand the
        meridian sun strikes the upper surface.
      </p>
    </div>

    <!-- searchbar to subscribe -->
    <FooterSubscribeInput />
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
.subscribe {
  padding: 95px 45px;
  background: linear-gradient(100deg, $btn-red-dark 5%, $btn-red-light 100%);
  border-radius: 30px;
  margin-bottom: 85px;
  label {
    display: none;
  }
}
</style>
