<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <ProductCard
        v-for="(product, i) in inventory"
        :key="product.id"
        :product="product"
        :i="i"
        :addToCart="addToCart"
      />
    </div>
  </main>
</template>
<script>
import ProductCard from '@/components/ProductCard.vue'
export default {
  name: 'ProductsView',
  props: ['inventory', 'addToCart'],
  components: {
    ProductCard
  }
}
</script>
