<script>
import CommonBtn from "./CommonBtn.vue";
export default {
  data() {
    return {
      btn: {
        text: "Sign In",
        type: "btn-blue",
      },
    };
  },
  components: {
    CommonBtn,
  },
};
</script>

<template>
  <nav class="flex align-items-center">
    <!-- *link nav -->
    <ul class="flex">
      <li><a href="">Home</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Services</a></li>
      <li><a href="">Blog</a></li>
      <li><a href="">Contact</a></li>
      <li><a href="">Portfolio</a></li>
    </ul>

    <!-- *button nav-->
    <CommonBtn :text="btn.text" :type="btn.type" />
  </nav>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

ul {
  gap: 30px;
  a {
    color: $text-white;
    &:hover {
      color: $text-red;
    }
  }
}
button {
  margin-left: 50px;
  padding: 10px 20px;
}
</style>
