<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'

export default {
  props: ['id', 'title', 'category', 'price', 'imageSrc'],
  components: {
    BaseCard,
    BaseButton,
  },
}
</script>
<template>
  <base-card>
    <div>
      <div>
        <div class="img-container">
          <img :src="imageSrc" alt="product image" />
        </div>
        <h4>{{ title }}</h4>
        <p>{{ category }}</p>
        <h4>{{ price }}</h4>
        <div>
          <base-button>Get Product</base-button>
        </div>
      </div>
    </div>
  </base-card>
</template>

<style scoped>
p,
h4 {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.img-container {
  text-align: center;
}
img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 5px;
}
</style>
