<script>
export default {
  props: ["contactUs"],
};
</script>

<template>
  <!-- *contact contactus -->
  <div class="contact-cs">
    <!-- title -->
    <div class="title text-white fw-b">{{ contactUs.title }}</div>

    <!-- address -->
    <div class="address">
      <p>
        <span class="important">{{ contactUs.address.important }}</span
        >{{ contactUs.address.text }}
      </p>
    </div>

    <!-- phone -->
    <div class="phone">
      <p>
        <span class="important">{{ contactUs.phone.important }}</span
        >{{ contactUs.phone.text }}
      </p>
    </div>

    <!-- email -->
    <div class="email">
      <p>
        <span class="important">{{ contactUs.email.important }}</span
        >{{ contactUs.email.text }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

.contact-cs {
  padding-top: 15px;

  .title {
    margin-bottom: 45px;
  }
  .address {
    margin-bottom: 30px;
  }
  .important {
    color: $text-white;
  }
}
</style>
