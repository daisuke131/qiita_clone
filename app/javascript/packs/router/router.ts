import { createRouter, createWebHistory } from 'vue-router';
import HomeContainer from "../components/home_container.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeContainer
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
