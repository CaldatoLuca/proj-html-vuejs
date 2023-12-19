<script>
export default {};
</script>

<template>
  <!-- !header -->
  <header class="text-white">
    <div class="container flex align-items-center justify-content-between">
      <!-- *logo -->
      <div class="logo">
        <img src="/img/white-logo-2.png" alt="Logo" />
      </div>

      <!-- *nav -->
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
        <button>Sign In</button>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
header {
  padding: 25px;
  background-color: $bg-blue-light;
  .logo {
    width: 145px;
    height: 55px;
  }
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
  }
}
</style>
