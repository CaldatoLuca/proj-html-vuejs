<script>
export default {
  props: ["card"],
};
</script>

<template>
  <div class="card">
    <div class="card-img">
      <img :src="card.src" :alt="card.title" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
