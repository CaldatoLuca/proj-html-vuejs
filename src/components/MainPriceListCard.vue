<script>
import CommonBtn from "./CommonBtn.vue";
export default {
  props: ["card"],
  components: {
    CommonBtn,
  },
};
</script>

<template>
  <!-- card -->
  <div class="card" :class="card.background">
    <!-- card title -->
    <h2 class="title">{{ card.title }}</h2>

    <!-- card suntitle -->
    <div class="subtitle text-uppercase">{{ card.subtitle }}</div>

    <!-- card price -->
    <div class="price fw-b relative">
      <span class="dollar absolute">&#36;</span>
      {{ card.price }}
    </div>

    <!-- card price -->
    <div class="time">{{ card.time }}</div>

    <!-- card functions -->
    <ul class="functions">
      <li v-for="fun in card.functions" class="open-sans">
        <span class="fw-b">{{ fun.function }} </span>
        <span class="fun-description">{{ fun.functionDescription }}</span>
      </li>
    </ul>

    <!-- card button -->
    <div class="button flex justify-content-center">
      <CommonBtn
        :text="card.btn.text"
        :type="card.btn.type"
        :arrow="card.btn.arrow"
      />
    </div>

    <!-- card number background -->
    <div class="number-bg">
      {{ card.price }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
.card-white {
  background-color: white;
  color: $important-black;
  .fun-description {
    color: $text-black;
  }
  .number-bg {
    color: $text-black;
  }
}
.card-red {
  background: linear-gradient(135deg, $btn-red-dark 5%, $btn-red-light 100%);
  .number-bg {
    color: $grey;
  }
}
.card {
  width: 30%;
  border-radius: 30px;
  padding: 55px 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
  z-index: 2;

  .title {
    margin-bottom: 25px;
    z-index: 10;
    position: static;
    z-index: 100;
  }
  .subtitle {
    margin-bottom: 45px;
  }
  .price {
    font-size: 80px;
    margin-bottom: 40px;
    .dollar {
      font-size: 15px;
      top: 15px;
      left: 38%;
    }
  }
  .time {
    margin-bottom: 60px;
  }
  .functions {
    margin-bottom: 60px;
    li {
      margin-bottom: 20px;
    }
  }
  .button {
    width: 100%;
  }
  .btn {
    font-weight: bold;
    padding: 5px 50px;
    display: flex;
    align-items: center;
  }
  :deep(.btn-white) {
    color: $text-red;
  }
  .btn-red {
    box-shadow: 0px 0px 110px 1px $btn-red-light;
  }
  .btn-red:hover {
    background: linear-gradient(90deg, $btn-blue-light 3%, $btn-blue-dark 100%);
    box-shadow: 0px 0px 110px 1px $btn-blue-light;
  }
}

.number-bg {
  position: absolute;
  top: -115px;
  right: -20px;

  font-size: 350px;
  z-index: 100;
  opacity: 0.15;
}
</style>
