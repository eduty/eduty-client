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
      <v-container grid-list-xl>
        <v-layout
          row
          wrap
          align-center
        >
          <v-flex
            lg5
            sm12
            order-sm2
          >
            <v-form
              ref="form"
              v-model="valid"
            >
              <v-alert
                class="mb-4"
                :value="loginError"
                type="error"
              >
                E-mail ou senha incorretos!
              </v-alert>

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
                required
                type="password"
                :rules="passwordRules"
                @input="onInputChange"
              />

              <e-button
                class="step__action mt-3 mr-3"
                block
                @click="submit"
              >
                Entrar
              </e-button>
            </v-form>
          </v-flex>

          <v-flex
            class="section__image"
            lg7
            sm12
            order-sm1
          >
            <img
              class="section__image-man"
              src="~/assets/images/man.svg"
            >

            <img
              class="section__image-man-id"
              src="~/assets/images/man-id.svg"
            >
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import EButton from '~/components/ui/e-button'

export default {
  components: {
    EButton,
  },
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
    ...mapActions('auth', {
      setUser: 'setUser',
    }),
    onInputChange() {
      this.loginError = false
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.$axios.$post('/api/auth', {
          email: this.email,
          password: this.password,
        }).then((results) => {
          this.setUser(results)

          this.$router.push({ path: `/${results.slug}` })
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
  padding: 52px 0 112px;
}

.section__curve {
  display: block;
  width: 100%;
}

.section__image {
  display: flex;
  justify-content: flex-end;
}

.section__image-man {
  margin-right: 30px;
  margin-top: 139px;
}
</style>
