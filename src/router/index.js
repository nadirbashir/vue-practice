import { createRouter, createWebHistory } from 'vue-router'

import ProductsList from '@/pages/products/ProductsList.vue'
import NotFound from '@/pages/NotFound.vue'
import Cart from '@/pages/cart/Cart.vue'
import ProductDetails from '@/pages/products/ProductDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList },
    { path: '/products/:id', component: ProductDetails },
    { path: '/cart', component: Cart },
    { path: '/:notFound(.*)', component: NotFound },
  ],
})

export default router
