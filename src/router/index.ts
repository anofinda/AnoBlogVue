import Tag from "@/views/TagView.vue";
import Home from "@/views/HomeView.vue";
import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/tag/:id",
      component: Tag,
      props: true,
    },
  ],
});

export default router;
