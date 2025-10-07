import { createRouter, createMemoryHistory } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(), 
  routes: [
    { path: '/', component: () => import('../pages/HomePage.vue') },
    { path: '/about', component: () => import('../pages/AboutPage.vue') },
    { path: '/contact', component: () => import('../pages/ContactPage.vue') },
  ],
})


export default router