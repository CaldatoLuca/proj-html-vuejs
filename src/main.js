import { createApp } from "vue";
//!file scss
import "./assets/scss/main.scss";

//!font open sans
import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/open-sans/400.css"; // Specify weight
import "@fontsource/open-sans/400-italic.css"; // Specify weight and style

//!font heebo
import "@fontsource/heebo"; // Defaults to weight 400
import "@fontsource/heebo/400.css"; // Specify weight

import App from "./App.vue";

createApp(App).mount("#app");
