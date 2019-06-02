<template>
  <v-container grid-list-xl>
    <v-layout
      row
      wrap
      align-start
    >
      <v-flex
        md12
        lg6
        order-lg1
        order-md2
      >
        <strong class="step__text">Passo 1</strong>
        <h2 class="headline mt-1 mb-5">
          Como deseja contribuir?
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
              <e-card
                class="step__card mb-4"
                :class="{
                  ['step__card--active']: paymentType === 'credit-card',
                }"
                :size="paymentType ? 'small' : ''"
                @click="setPaymentType('credit-card')"
              >
                Cartão de crédito
              </e-card>
            </v-flex>

            <v-flex md6>
              <e-card
                class="step__card"
                :class="{
                  ['step__card--active']: paymentType === 'billing',
                }"
                :size="paymentType ? 'small' : ''"
                @click="setPaymentType('billing')"
              >
                Boleto
              </e-card>
            </v-flex>
          </v-layout>

          <template v-if="paymentType">
            <v-text-field
              v-model="name"
              label="Qual o seu nome completo?"
              :rules="[rules.required]"
            />

            <v-text-field
              v-model="cpf"
              label="Qual o seu CPF?"
              :rules="[rules.required]"
            />

            <v-text-field
              v-model="address"
              label="Qual o seu endereço?"
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
                  v-model="city"
                  label="Qual sua cidade?"
                  :rules="[rules.required]"
                />
              </v-flex>

              <v-flex
                xs12
                md6
              >
                <v-text-field
                  v-model="state"
                  label="Qual o estado?"
                  :rules="[rules.required]"
                />
              </v-flex>
            </v-layout>
          </template>

          <template v-if="paymentType === 'credit-card'">
            <v-text-field
              label="Informe o número do cartão de crédito"
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
                  label="Data de expiração"
                  :rules="[rules.required]"
                />
              </v-flex>

              <v-flex
                xs12
                md6
              >
                <v-text-field
                  label="Código de seguraça (CVV)"
                  :rules="[rules.required]"
                />
              </v-flex>
            </v-layout>
          </template>
        </v-form>

        <e-button
          v-if="paymentType"
          class="step__action mt-3"
          @click="submit"
        >
          Próximo passo
        </e-button>
      </v-flex>

      <v-flex
        class="section__image"
        md12
        lg6
        order-md1
        order-lg2
      >
        <img
          class="section__image-undraw-transfer-money"
          src="~/assets/images/undraw-transfer-money.svg"
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import EButton from '~/components/ui/e-button'
import ECard from '~/components/ui/e-card'

export default {
  components: {
    EButton,
    ECard,
  },
  data() {
    return {
      cpf: '',
      paymentType: '',
      address: '',
      city: '',
      confirmPassword: '',
      name: '',
      password: '',
      passwordRules: [
        v => !!v || 'Campo obrigatório',
      ],
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
    ...mapState('user-page', {
      userPageSlug: state => state.user.slug,
    }),
  },
  beforeMount() {
    if (this.isAuthenticated) {
      this.name = this.currentUser.name
      this.city = this.currentUser.city
      this.state = this.currentUser.state
    }
  },
  methods: {
    ...mapActions('payment', {
      setPayment: 'setPayment',
    }),
    nextStep() {
      this.$router.push(`/${this.userPageSlug}/contribuir/valor`)
    },
    submit() {
      if (this.$refs.form.validate()) {
        const payment = {
          user_id: this.currentUser && this.currentUser.id,
          name: this.name,
          city: this.city,
          state: this.state,
          method: this.paymentType,
          kind: 'monthly',
        }

        this.setPayment(payment)

        this.nextStep()
      }
    },
    setPaymentType(type) {
      console.log('UIA')
      this.paymentType = type
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
  margin-top: 60px;
}
</style>
