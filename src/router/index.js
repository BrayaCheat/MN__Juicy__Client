import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('../views/home.vue')
    },
    {
      name: 'juice__detail',
      path: '/juice__detail/:id',
      component: () => import('../views/juice__detail.vue')
    },
    {
      name: 'juice__page',
      path: '/juice__page',
      component: () => import('../views/juice__page.vue')
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('../views/about.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/home.vue')
    }
  ]
})

export default router
