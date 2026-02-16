<script>
import BaseLoader from '@/components/ui/BaseLoader.vue'

export default {
  components: { BaseLoader },
  data() {
    return {
      isLoading: false,
      product: null,
    }
  },
  methods: {
    async loadProduct() {
      const productId = this.$route.params.id
      try {
        this.isLoading = true
        const response = await fetch(`https://dummyjson.com/products/${productId}`)
        const result = await response.json()
        this.product = result
      } catch (err) {
        console.log(err)
      } finally {
        this.isLoading = false
      }
    },
  },
  created() {
    this.loadProduct()
  },
}
</script>
<template>
  <div class="detail-container">
    <div v-if="isLoading" class="loader">
      <base-loader></base-loader>
      <p>...Loading Details</p>
    </div>
    <div v-else-if="product">
      <h1>{{ product.title }}</h1>
      <p>{{ product.description }}</p>
      <h4>Price: {{ product.price }}</h4>
      <h4>Category: {{ product.category }}</h4>
      <div class="img-container">
        <img :src="product.images[0]" alt="product image" />
      </div>
    </div>
    <p v-else>Product not found.</p>
  </div>
</template>

<style scoped>
.detail-container {
  padding: 0px 50px;
}
.loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}
.img-container {
  text-align: center;
  margin-top: 20px;
}
img {
  width: 300px;
  height: 300px;
  object-fit: contain;
  border-radius: 5px;
}
</style>
