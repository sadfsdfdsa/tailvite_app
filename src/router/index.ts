import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/TheMainView'),
  },
  {
    path: '/app',
    name: 'Account',
    component: () => import('../views/TheAccountView'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
