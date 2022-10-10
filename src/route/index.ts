import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/member.vue'),
      meta: {
        layout: 'member'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/notFound.vue')
    }
  ]
})

export default router
