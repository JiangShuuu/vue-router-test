import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'vue-active-link',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about.vue')
    },
    {
      path: '/discover',
      name: 'discover',
      component: () => import('../views/discover.vue')
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/member.vue'),
      meta: {
        layout: 'member',
        title: '會員專區'
      },
      children: [
        {
          path: '/member/info',
          name: 'info',
          component: () => import('../components/member/Info.vue'),
          meta: { title: '會員資訊' }
        },
        {
          path: '/member/account',
          name: 'account',
          component: () => import('../components/member/account.vue'),
          meta: { title: '會員帳戶' }
        },
        {
          path: '/member/payment',
          name: 'payment',
          component: () => import('../components/member/payment.vue'),
          meta: { title: '會員支付' }
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/notFound.vue')
    }
  ]
})

export default router
