import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DancerView from '../views/DancerView.vue'
import StyleView from '../views/StyleView.vue'
import EventView from '../views/EventView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/dancer',
      name: 'dancer',
      component: DancerView
    },
    {
      path: '/style',
      name: 'style',
      component: StyleView
    },
    {
      path: '/event',
      name: 'event',
      component: EventView
    },
  ]
})

export default router
