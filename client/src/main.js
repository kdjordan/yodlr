import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import './style.css'

import createRouter from './routes.js'
import App from './App.vue'
// import './assets/tailwind.css'

const router = createRouter(createWebHistory())
const app = createApp(App)
app.use(router).mount('#app')
