<script>
import ProductCard from './ProductCard.vue'

export default {
  components: { ProductCard },
  data() {
    return {
      isLoading: false,
      error: null,
      products: [],
    }
  },

  methods: {
    async loadProducts() {
      try {
        this.isLoading = true
        const response = await fetch('https://dummyjson.com/products')
        const result = await response.json()
        console.log(result)
        this.products = result.products
        this.isLoading = false
      } catch (err) {
        console.log(err)
        this.error = err
        this.isLoading = false
      }
    },
  },
  created() {
    this.loadProducts()
  },
}
</script>

<template>
  <h1>Products</h1>
  <div class="list-container">
    <product-card
      v-for="product in products"
      :id="product.id"
      :title="product.title"
      :category="product.category"
      :price="product.price"
      :imageSrc="product.images[0]"
    ></product-card>
  </div>
</template>

<style scoped>
.list-container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 2px;
}
</style>
