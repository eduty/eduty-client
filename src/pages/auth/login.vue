<template>
  <div>
    <v-container>
      <h1 class="headline">
        Acessando sua conta
      </h1>
    </v-container>

    <img
      class="section__curve"
      src="~/assets/images/home/section-curve.svg"
    >

    <div class="section pb-5">
      <v-alert
        :value="loginError"
        type="error"
      >
        E-mail ou senha incorretos!
      </v-alert>

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
              @input="onInputChange"
            />

            <v-text-field
              v-model="password"
              label="Senha"
              min="8"
              counter
              required
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              :type="e1 ? 'text' : 'password'"
              :rules="passwordRules"
              @click:append="() => (e1 = !e1)"
              @input="onInputChange"
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
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import humps from 'lodash-humps'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      loginError: false,
      valid: false,
      e1: false,
      password: '',
      passwordRules: [
        v => !!v || 'Campo obrigatório',
      ],
      email: '',
      emailRules: [
        v => !!v || 'Campo obrigatório',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail deve ser válido',
      ],
    }
  },
  methods: {
    ...mapActions('user', {
      setUser: 'setUser',
    }),
    onInputChange() {
      this.loginError = false
    },
    submit() {
      if (this.$refs.form.validate()) {
        axios.post('/api/auth', {
          email: this.email,
          password: this.password,
        }).then(({ data }) => {
          this.setUser(humps(data))

          this.$router.push({ path: '/for-business' })
        }).catch(({ status }) => {
          this.loginError = true

          Promise.reject(status)
        })
      }
    },
    clear() {
      this.$refs.form.reset()
    },
  },
}
</script>

<style lang="stylus" scoped>
.section {
  background-color: $color-light;
}

.section__curve {
  display: block;
  width: 100%;
}
</style>
