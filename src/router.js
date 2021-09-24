import { views } from "./modules/views/views.module.js";

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: views,
});
