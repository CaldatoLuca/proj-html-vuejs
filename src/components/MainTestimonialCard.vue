<script>
export default {
  data() {
    return {
      maxVote: 5,
    };
  },
  props: ["card"],
  methods: {
    getImagePath: function (imgPath) {
      return new URL(imgPath, import.meta.url).href;
    },
  },
};
</script>

<template>
  <div class="card flex flex-column align-items-center">
    <!-- card image -->
    <div class="card-image">
      <img :src="getImagePath(card.src)" :alt="card.author" />
    </div>

    <!-- stars -->
    <div class="flex">
      <div class="stars" v-for="n in maxVote">
        <span class="star-full" v-if="n <= card.vote">&starf;</span>
        <span class="star-empty" v-else>&star;</span>
      </div>
    </div>

    <!-- text -->
    <p class="text">{{ card.text }}</p>

    <!-- card author -->
    <div class="author fw-b">{{ card.author }}</div>

    <!-- card role -->
    <div class="role">{{ card.role }}</div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
.card {
  width: 25%;
  margin-bottom: 280px;
  .card-image {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 5px solid $btn-red-dark;
    margin-bottom: 55px;
  }
  .stars {
    margin-bottom: 50px;
    font-size: 20px;
    .star-full {
      color: $btn-red-dark;
    }
    .star-empty {
      color: $btn-red-dark;
    }
  }

  .text {
    margin-bottom: 35px;
  }
  .author {
    margin-bottom: 22px;
  }
}
</style>
