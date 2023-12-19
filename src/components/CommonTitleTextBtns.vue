<script>
export default {
  props: ["text"],
};
</script>

<template>
  <!-- title -->
  <div class="title text-white">
    <h1>
      {{ text.title1 }}
      <span class="fw-n">{{ text.title2 }}</span>
      {{ text.title3 }}
    </h1>
  </div>

  <!-- blue text -->
  <div class="text-blue">
    {{ text.textBlue }}
  </div>

  <!-- buttons -->
  <div class="buttons">
    <button>{{ text.title1 }}</button>
    <button>Explore More</button>
  </div>
</template>
