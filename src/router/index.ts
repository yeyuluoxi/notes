import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Index = () => import("@/views/Index.vue");

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'index', component: Index }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
