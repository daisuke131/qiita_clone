import { createApp } from 'vue'
import App from '../app.vue'
import { store } from './store/store'
import router from "./router/router";

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(App);
  app.use(store);
  app.use(router);
  app.mount('#app');
})
