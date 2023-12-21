<script>
export default {
  props: ["resource"],
};
</script>

<template>
  <!-- *contact resources -->
  <div class="contact-resources flex">
    <div class="title text-white fw-b">{{ resource.title }}</div>
    <ul>
      <li v-for="link in resource.list">
        <a href="">{{ link }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
.contact-resources {
  padding-top: 15px;
  margin-right: 180px;
  ul {
    padding: 60px 15px 0 15px;
    li {
      margin-bottom: 10px;
    }
  }
}
</style>
