<template>
  <v-layout>
    <v-flex>
      <h1>Entrar</h1>

      <v-card>
        <v-card-text class="pt-4">
          <v-form
            ref="form"
            v-model="valid"
          >
            <v-text-field
              v-model="email"
              label="E-mail"
              required
              :rules="emailRules"
            />

            <v-text-field
              v-model="password"
              label="Senha"
              min="8"
              counter
              required
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              :type="e1 ? 'password' : 'text'"
              :rules="passwordRules"
              @click:append="() => (e1 = !e1)"
            />

            <v-layout justify-space-between>
              <v-btn
                :class="{ 'blue darken-4 white--text' : valid, disabled: !valid }"
                @click="submit"
              >
                Login
              </v-btn>

              <a href="">Forgot Password</a>
            </v-layout>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      e1: false,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log('OPA')
        // this.$refs.form.$el.submit()
      }
    },
    clear() {
      this.$refs.form.reset()
    },
  },
}
</script>
