<script>
import FooterContactText from "./FooterContactText.vue";
import FooterContactLinks from "./FooterContactLinks.vue";
import FooterContactResources from "./FooterContactResources.vue";
import FooterContactContactsUs from "./FooterContactContactsUs.vue";
export default {
  data() {
    return {
      contactText:
        "When, while lovely valley teems vapour aroundmeand meridian sun strikes the upper impenetrable",
      links: {
        title: "Quick Links",
        list: ["Services", "Contact", "Blog"],
      },
      resources: {
        title: "Resources",
        list: [
          "Art Design",
          "Computer",
          "IT News",
          "Networking",
          "Web Security",
        ],
      },
      contactUs: {
        title: "Contact Us",
        address: {
          important: "Address: ",
          text: "Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051",
        },
        phone: {
          important: "Phone: ",
          text: "+99(0) 101 0000 888",
        },
        email: {
          important: "Email: ",
          text: "info@yourdomain.com",
        },
      },
    };
  },
  components: {
    FooterContactText,
    FooterContactLinks,
    FooterContactResources,
    FooterContactContactsUs,
  },
};
</script>

<template>
  <div class="contacts">
    <div class="container flex">
      <!-- first component -->
      <FooterContactText :text="contactText" />

      <!-- second component -->
      <FooterContactLinks :links="links" />

      <!-- third component -->
      <FooterContactResources :resource="resources" />

      <!-- fourth component -->
      <FooterContactContactsUs :contactUs="contactUs" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables" as *;

.contacts {
  color: rgba(234, 234, 234, 0.6);
  margin-bottom: 70px;
  :deep(a) {
    color: rgba(234, 234, 234, 0.6);
  }
  :deep(.text-white) {
    font-size: 20px;
  }
}
</style>
