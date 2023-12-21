<script>
export default {};
</script>

<template>
  <!-- open chat -->
  <button class="open-chat flex justify-content-center align-items-center">
    <font-awesome-icon icon="fa-regular fa-comment" />
  </button>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
.open-chat {
  position: fixed;
  right: 20px;
  bottom: 10px;
  background-color: $open-chat-blue;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  color: $text-white;
  font-size: 25px;
  border: none;
}
</style>
