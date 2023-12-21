<script>
import CommonBtn from "./CommonBtn.vue";
export default {
  data() {
    return {
      btn: {
        text: "Subscribe",
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
  <!-- searchbar to subscribe -->
  <form @submit.prevent class="flex">
    <label for="sub"></label>
    <input type="email" id="sub" placeholder="Enter Your Email Address..." />
    <div class="button"><CommonBtn :text="btn.text" :type="btn.type" /></div>
  </form>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;
form {
  width: 30%;
  input {
    width: 100%;
    outline: none;
    border: none;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    padding: 20px 0 20px 40px;
  }
  label {
    display: none;
  }
  .button {
    background-color: white;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    padding: 5px;
  }
}
</style>
