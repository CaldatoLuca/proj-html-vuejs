<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import OpenChat from "./components/OpenChat.vue";
import ScrollUp from "./components/ScrollUp.vue";
export default {
  components: {
    Header,
    Main,
    Footer,
    OpenChat,
    ScrollUp,
  },
};
</script>

<template>
  <Header />
  <Main />
  <Footer />
  <OpenChat />
  <ScrollUp />
</template>
