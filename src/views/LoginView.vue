<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="username" type="email" placeholder="E-Mail" required />
      <input v-model="password" type="password" placeholder="Passwort" required />
      <div v-if="error" class="error">{{ error }}</div>
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
      password: "",
      error: ""
    }
  },
  methods: {
    async handleLogin() {
      this.error = ""
      const response = await login({
        username: this.username,
        password: this.password
      })

      if (response.ok) {
        this.$router.push("/products")
      } else {
        this.error = "Login fehlgeschlagen. Prüfen Sie Benutzername/Passwort."
      }
    }
  }
}
</script>