import { createRouter, createWebHistory } from 'vue-router';
import HomeContainer from "../components/home_container.vue";
import ArticleContainer from "../components/article_container.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeContainer
  },
  {
    path: '/article/:id(\\d+)',  // :idは数値のみに制限する
    name: 'Article',
    component: ArticleContainer
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
