import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Dog from "../components/site/Dog.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/dog/:id",
    name: "Dog",
    component: Dog
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;