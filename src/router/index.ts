import Tag from "@/views/TagView.vue";
import Home from "@/views/HomeView.vue";
import Essay from "@/views/EssayView.vue";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/tag/:id",
      component: Tag,
    },
    {
      path: "/essay/:id",
      component: Essay,
    },
  ],
});

export default router;
