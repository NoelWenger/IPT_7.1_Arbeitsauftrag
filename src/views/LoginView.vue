<template>
  <div class="container">
    <h2>Login</h2>

    <form @submit.prevent="handleLogin">
      <input v-model="username" type="email" required />
      <input v-model="password" type="password" required />
      <button type="submit">Login</button>
    </form>

    <router-link to="/register">Registrieren</router-link>
  </div>
</template>

<script>
import { login } from "../services/api"

export default {
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    async handleLogin() {
      const response = await login({
        username: this.username,
        password: this.password
      })

      if (response.ok) {
        this.$router.push("/products")
      } else {
        alert("Login fehlgeschlagen")
      }
    }
  }
}
</script>