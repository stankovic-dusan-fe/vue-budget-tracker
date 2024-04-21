import "./assets/style.css";

import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.mount("#app");
