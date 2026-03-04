<template>
  <div class="container">
    <h2>Registrierung</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="form.username" type="email" placeholder="E-Mail" required />
      <input v-model="form.firstname" type="text" placeholder="Vorname" required />
      <input v-model="form.lastname" type="text" placeholder="Nachname" required />
      <input v-model="form.password" type="password" placeholder="Passwort" required />

      <select v-model="form.language">
        <option value="de">Deutsch</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>

      <div v-if="error" class="error">{{ error }}</div>
      <button type="submit">Registrieren</button>
    </form>

    <router-link to="/">Zum Login</router-link>
  </div>
</template>

<script>
import { register } from "../services/api"

export default {
  data() {
    return {
      form: {
        username: "",
        firstname: "",
        lastname: "",
        password: "",
        language: "de"
      },
      error: ""
    }
  },
  methods: {
    async handleRegister() {
      this.error = ""

      if (this.form.password.length < 6) {
        this.error = "Passwort muss mindestens 6 Zeichen haben"
        return
      }

      if (!this.form.username.match(/^\S+@\S+\.\S+$/)) {
        this.error = "Bitte gültige E-Mail eingeben"
        return
      }

      const response = await register(this.form)

      if (response.ok) {
        alert("Registrierung erfolgreich")
        this.$router.push("/")
      } else {
        this.error = "Registrierung fehlgeschlagen"
      }
    }
  }
}
</script>