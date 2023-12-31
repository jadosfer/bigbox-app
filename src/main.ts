import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
//import "bootstrap/dist/css/bootstrap.css";

const app = createApp(App).use(router).use(store).mount("#app");
