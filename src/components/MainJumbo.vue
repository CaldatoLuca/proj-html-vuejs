<script>
export default {};
</script>

<template>
  <!-- !jumbotron -->
  <section class="jumbo">
    <div class="container flex justify-content-between align-items-center">
      <!-- *left part -->
      <div class="left-jumbo">
        <div class="title text-white">
          <div class="fw-b">Business Planning</div>
          <div class="open-sans">Digital Technology</div>
          <div class="fw-b">Modern Solution</div>
        </div>
      </div>

      <!-- *right part image -->
      <div class="right-jumbo">
        <img src="../assets/img/header.png" alt="Jumbo image" />
      </div>
    </div>
  </section>
  <h1>ciao</h1>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
.jumbo {
  padding: 15px 0 190px 0;
  background: linear-gradient(0deg, $bg-blue-dark 0%, $bg-blue-light 100%);
  .left-jumbo {
    width: 30%;
  }
  .right-jumbo {
    width: 50%;
  }
}
</style>
