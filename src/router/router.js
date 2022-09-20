import { createRouter, createWebHashHistory } from "vue-router"
import Main from '@/pages/main.vue'
import PostIdPage from '@/pages/PostIdPage.vue'

const routes = [
   {
      path: '/',
      component: Main
   },
   {
      path: '/posts/:id',
      component: PostIdPage
   },

]


const router = createRouter({
   routes,
   history: createWebHashHistory(process.env.BASE_URL)
}
)

export default router;