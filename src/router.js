import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './pages/HomeView.vue'
import AppCharacters from './pages/AppCharacters.vue';


const routes = [
  { path: '/', component: HomeView, name: 'home' },
  { path: '/characters', component: AppCharacters, name: 'characters' },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;