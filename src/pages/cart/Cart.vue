<script>
import { mapGetters } from 'vuex'
import ProductCard from '../../components/products/ProductCard.vue'

export default {
  components: { ProductCard },
  computed: {
    ...mapGetters({
      products: 'GET_CART_ITEMS',
    }),
  },
}
</script>
<template>
  <div>
    <h1>Cart Details</h1>
    <div v-if="!products || !products.length">No Products in Cart</div>
    <div v-else class="list-container">
      <product-card
        v-for="product in products"
        :id="product.id"
        :title="product.title"
        :category="product.category"
        :price="product.price"
        :imageSrc="product.imageSrc"
      ></product-card>
    </div>
  </div>
</template>

<style scoped>
h1 {
  padding-left: 55px;
}

.list-container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 14px;
  padding: 0px 50px;
}
</style>
