<template>
  <v-container grid-list-xl>
    <v-layout
      row
      wrap
      align-center
    >
      <v-flex md1 />

      <v-flex md5>
        <strong class="step__text">Passo 3</strong>
        <h2 class="headline mt-1 mb-5">
          Complete seus dados :)
        </h2>

        <v-form
          ref="form"
          v-model="valid"
        >
          <v-layout
            row
            wrap
          >
            <v-flex md6>
              <v-text-field
                v-model="email"
                label="Qual o seu e-mail?"
                :rules="[rules.required]"
              />
            </v-flex>

            <v-flex md6>
              <v-text-field
                v-model="phone"
                label="Qual o seu telefone?"
                :rules="[rules.required]"
              />
            </v-flex>

            <v-flex md6>
              <v-text-field
                v-model="password"
                label="Digite sua senha"
                type="password"
                :rules="[rules.required]"
              />
            </v-flex>

            <v-flex md6>
              <v-text-field
                v-model="confirmPassword"
                label="Confirme sua senha"
                type="password"
                :rules="[rules.required]"
              />
            </v-flex>
          </v-layout>
        </v-form>

        <v-layout
          class="mt-4"
          row
          wrap
        >
          <v-flex md5>
            <e-button
              block
              class="mt-3"
              type="outline"
              @click="lastStep"
            >
              Voltar
            </e-button>
          </v-flex>

          <v-flex md7>
            <e-button
              block
              class="mt-3"
              type="primary"
              @click="submit"
            >
              Próximo passo
            </e-button>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex
        class="section__image"
        md6
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
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import EButton from '~/components/ui/e-button'

export default {
  scrollToTop: true,
  components: {
    EButton,
  },
  data() {
    return {
      confirmPassword: '',
      email: '',
      emailRules: [
        v => !!v || 'Campo obrigatório',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail deve ser válido',
      ],
      password: '',
      phone: '',
      rules: {
        required: value => !!value || 'Campo obrigatório.',
      },
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
    ...mapState('user-page', {
      campaignId: state => state.user.campaigns[0].id,
      userPageSlug: state => state.user.slug,
    }),
    ...mapState('payment', [
      'payment',
      'value',
    ]),
  },
  beforeMount() {
    if (this.isAuthenticated) {
      this.email = this.currentUser.email
      this.phone = this.currentUser.phone_number
    }
  },
  methods: {
    lastStep() {
      this.$router.push(`/${this.userPageSlug}/contribuir/dados`)
    },
    nextStep() {
      this.$router.push(`/${this.userPageSlug}/contribuir/sucesso`)
    },
    submit() {
      if (this.$refs.form.validate()) {
        const paymentParams = {
          campaign_id: this.campaignId,
          kind: this.payment.kind,
          method: this.payment.method,
          user_id: this.currentUser && this.currentUser.id,
          value: this.value,
        }

        console.log(paymentParams)

        this.$axios.$post('/api/pay', paymentParams).then(() => {
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

.step__card {
  cursor: pointer;
  font-weight: bold;
  text-align: center;
}

.step__card--active {
  box-shadow: inset 0 0 0 2px $color-accent;
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
