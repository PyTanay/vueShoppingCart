<template>
  <aside class="cart-container">
    <div class="cart">
      <h1 class="cart-title spread">
        <span>
          Cart
          <i class="icofont-cart-alt icofont-1x"></i>
        </span>
        <button @click="toggle" class="cart-close">&times;</button>
      </h1>

      <div class="cart-body">
        <table class="cart-table">
          <thead>
            <tr>
              <th><span class="sr-only">Product Image</span></th>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th><span class="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(quantity, key, i) in cart" :key="i">
              <td>
                <i :class="['icofont-3x icofont-', getIcon(key)].join('')"></i>
              </td>
              <td>{{ key }}</td>
              <td>${{ getPrice(key) }}</td>
              <td class="center">{{ quantity }}</td>
              <td>${{ (getPrice(key) * quantity).toFixed(2) }}</td>
              <td class="center">
                <button @click="remove(key)" class="btn btn-light cart-remove">
                  &times;
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <p class="center" v-if="!Object.keys(cart).length">
          <em>No items in cart</em>
        </p>
        <div class="spread">
          <span><strong>Total:</strong> ${{ calculateTotal() }}</span>
          <button class="btn btn-light">Checkout</button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SideBar',
  props: ['inventory', 'cart', 'toggle', 'remove'],
  methods: {
    getPrice (prod) {
      const product = this.inventory.find((p) => {
        return p.name === prod
      })
      return product.price.USD
    },
    getIcon (prod) {
      const product = this.inventory.find((p) => {
        return p.name === prod
      })
      return product.icon
    },
    calculateTotal () {
      const cart = Object.entries(this.cart)
      const initialValue = 0
      const total = cart.reduce((previousValue, currentValue) => {
        if (previousValue === initialValue) {
          return this.getPrice(currentValue[0]) * currentValue[1]
        } else {
          return (
            previousValue + this.getPrice(currentValue[0]) * currentValue[1]
          )
        }
      }, initialValue)
      return total.toFixed(2)
    }
  }
}
</script>
