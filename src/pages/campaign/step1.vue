<template>
  <v-container grid-list-xl>
    <v-layout
      row
      wrap
    >
      <v-flex md1 />

      <v-flex md11>
        <strong class="step__text">Passo 1</strong>
        <h2 class="headline mt-1 mb-4">
          Quem é você?
        </h2>

        <v-layout
          row
          wrap
        >
          <v-flex
            xs12
            sm8
            md5
          >
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
                    :rules="emailRules"
                  />
                </v-flex>

                <v-flex
                  xs12
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
                  xs12
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
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import EButton from '~/components/ui/e-button'

export default {
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
    ...mapGetters('auth', [
      'isAuthenticated',
    ]),
    ...mapState('auth', [
      'currentUser',
    ]),
  },
  beforeMount() {
    if (this.isAuthenticated) {
      console.log(this.currentUser)
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
        this.$axios.$post('/api/users', {
          city: this.city,
          email: this.email,
          name: this.name,
          password: this.password,
          phone: this.phone,
          state: this.state,
        }).then(() => {
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
</style>
