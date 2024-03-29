<template>
  <v-container grid-list-xl>
    <v-layout
      row
      wrap
      align-center
    >
      <v-flex
        sm12
        md5
      >
        <strong class="step__text">Passo 1</strong>
        <h2 class="headline mt-1 mb-4">
          Quem é você?
        </h2>

        <v-form
          ref="form"
          v-model="valid"
        >
          <v-text-field
            v-model="name"
            label="Qual o seu nome?"
            :rules="[rules.required]"
          />

          <v-layout
            row
            wrap
          >
            <v-flex
              xs12
              md6
            >
              <v-text-field
                v-model="email"
                label="Qual o seu e-mail"
                type="email"
                :disabled="email === (currentUser && currentUser.email)"
                :rules="emailRules"
              />
            </v-flex>

            <v-flex
              sm12
              md6
            >
              <v-text-field
                v-model="phone"
                label="Qual o seu telefone?"
                type="tel"
                :rules="[rules.required]"
              />
            </v-flex>

            <v-flex
              xs12
              md6
            >
              <v-text-field
                v-model="city"
                label="Em qual cidade mora?"
                :rules="[rules.required]"
              />
            </v-flex>

            <v-flex
              sm12
              md6
            >
              <v-text-field
                v-model="state"
                label="Qual estado?"
                :rules="[rules.required]"
              />
            </v-flex>

            <v-flex
              v-if="!isAuthenticated"
              xs12
              md6
            >
              <v-text-field
                v-model="password"
                label="Digite uma senha"
                type="password"
                min="8"
                :rules="passwordRules"
              />
            </v-flex>

            <v-flex
              v-if="!isAuthenticated"
              xs12
              md6
            >
              <v-text-field
                v-model="confirmPassword"
                label="Confirmar sua senha"
                type="password"
                min="8"
                :rules="passwordRules"
              />
            </v-flex>
          </v-layout>

          <e-button
            class="step__action mt-3"
            @click="submit"
          >
            Próximo passo
          </e-button>
        </v-form>
      </v-flex>

      <v-spacer class="hidden-sm-and-down" />

      <v-flex
        class="section__image hidden-sm-and-down"
        sm12
        md6
      >
        <img
          class="section__image-man hidden-md-and-down"
          src="~/assets/images/man.svg"
        >

        <img
          class="section__image-man-id"
          src="~/assets/images/man-id.svg"
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import EButton from '~/components/ui/e-button'

export default {
  scrollToTop: true,
  components: {
    EButton,
  },
  data() {
    return {
      city: '',
      confirmPassword: '',
      email: '',
      emailRules: [
        v => !!v || 'Campo obrigatório',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail deve ser válido',
      ],
      name: '',
      password: '',
      passwordRules: [
        v => !!v || 'Campo obrigatório',
      ],
      phone: '',
      rules: {
        required: value => !!value || 'Campo obrigatório.',
      },
      state: '',
      valid: false,
    }
  },
  computed: {
    ...mapActions('auth', [
      'setUser',
    ]),
    ...mapGetters('auth', [
      'isAuthenticated',
    ]),
    ...mapState('auth', [
      'currentUser',
    ]),
  },
  beforeMount() {
    if (this.isAuthenticated) {
      this.name = this.currentUser.name
      this.email = this.currentUser.email
      this.phone = this.currentUser.phone_number
      this.city = this.currentUser.city
      this.state = this.currentUser.state
    }
  },
  methods: {
    nextStep() {
      this.$router.push('/campanha/sonho')
    },
    submit() {
      if (this.$refs.form.validate() && this.password === this.confirmPassword) {
        const _password = this.password ? { password: this.password } : {}

        this.$axios.$post('/api/users', {
          city: this.city,
          email: this.email,
          name: this.name,
          phone: this.phone,
          state: this.state,
          ..._password,
        }).then((user) => {
          this.$store.dispatch('auth/setUser', user)
          this.nextStep()
        })
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.step__text {
  color: $color-gray;
  text-transform: uppercase;
}

.step__action {
  width: 270px;
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
