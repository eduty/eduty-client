<template>
  <v-container grid-list-xl>
    <v-layout
      row
      wrap
    >
      <v-flex md1 />

      <v-flex md5>
        <strong class="step__text">Passo 1</strong>
        <h2 class="headline mt-1 mb-4">
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
    </v-layout>
  </v-container>
</template>

<script>
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
  methods: {
    nextStep() {
      this.$router.push('/campanha/sonho')
    },
    submit() {
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
</style>
