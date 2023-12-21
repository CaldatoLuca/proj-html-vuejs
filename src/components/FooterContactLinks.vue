<script>
export default {
  props: ["links"],
};
</script>

<template>
  <!-- *contact links -->
  <ul class="contact-links">
    <li class="text-white fw-b">{{ links.title }}</li>
    <li v-for="link in links.list">
      <a href="">{{ link }}</a>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

.contact-links {
  padding-top: 15px;
  margin-right: 280px;
  .text-white {
    margin-bottom: 25px;
  }
  li {
    margin-bottom: 28px;
  }
}
</style>
