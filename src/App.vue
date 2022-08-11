<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>
    <a href="#" @click="toggleSidebar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ calculateQuantity() }})</span>
    </a>
  </header>
  <router-view :inventory="inventory" :addToCart="addToCart" />

  <SideBar
    v-if="showSidebar"
    :toggle="toggleSidebar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
  />
</template>

<script>
import food from './food.json'
import SideBar from '@/components/SideBar.vue'
export default {
  components: {
    SideBar
  },
  methods: {
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    },
    removeItem (name) {
      delete this.cart[name]
    },
    addToCart (item, index, quantity, resetQuantity) {
      if (!this.cart[item]) this.cart[item] = 0
      this.cart[item] += quantity
      resetQuantity()
    },
    calculateQuantity () {
      const cart = Object.entries(this.cart)
      const qty = cart.reduce((perv, curr) => {
        return perv + curr[1]
      }, 0)
      return qty
    }
  },
  props: [''],
  data () {
    return {
      inventory: food,
      cart: {},
      showSidebar: false
    }
  }
}
</script>
