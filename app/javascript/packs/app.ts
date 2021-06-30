import { createApp } from 'vue'
import App from '../app.vue'
import { store, key } from './store/store'
import router from "./router/router";

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(App);
  app.use(store, key);
  app.use(router);
  app.mount('#app');
})
