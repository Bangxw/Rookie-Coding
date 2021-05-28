import { createRouter, createWebHistory } from 'vue-router'

// 开启历史模式
// vue2种使用 mode: history 实现
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/basic',
    component: () => import('../views/basic/index.vue')
  }]
})

export default router