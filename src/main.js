import AppModule from "./modules/app/app.module.js";
import { router } from "./router.js";

const app = Vue.createApp(AppModule);
app.use(router);
app.mount("#app");
