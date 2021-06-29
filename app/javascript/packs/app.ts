import { createApp } from 'vue'
import App from './components/home_container.vue'
import { store, key } from './store/store'

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(App)
  app.use(store, key)
  app.mount('#app')
})
