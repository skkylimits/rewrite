import { createRouter, createWebHistory } from 'vue-router'
import Docs from '../pages/Docs.vue'
import Markdown from '../pages/Markdown.vue'
import Lab from '../pages/Lab.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: Lab,
    },
    {
      path: '/docs',
      name: 'docs',
      component: Docs,
    },
    {
      path: '/markdown',
      name: 'markdown',
      component: Markdown,
    },
    {
      path: '/lab',
      name: 'lab',
      component: Lab,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/AboutView.vue'),
    },
  ],
})

export default router
