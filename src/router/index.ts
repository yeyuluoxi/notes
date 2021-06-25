import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// const Index = () => import("@/views/Index.vue");
import Index from "@/views/Index.vue";

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'index', component: Index }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
