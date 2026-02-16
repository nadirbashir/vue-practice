import { createRouter, createWebHistory } from 'vue-router'

import ProductsList from '@/pages/products/ProductsList.vue'
import NotFound from '@/pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList },
    { path: '/:notFound(.*)', component: NotFound },
  ],
})

export default router
