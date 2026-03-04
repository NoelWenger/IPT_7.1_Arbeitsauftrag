<template>
  <div class="container">
    <h2>Produkte</h2>

    <button @click="logout">Logout</button>

    <div v-for="product in products" :key="product.id" class="product">
      {{ product.name }}
    </div>
  </div>
</template>

<script>
import { getProducts } from "../services/api"

export default {
  data() {
    return {
      products: []
    }
  },
  async mounted() {
    this.products = await getProducts()
  },
  methods: {
    logout() {
      this.$router.push("/")
    }
  }
}
</script>