<template>
  <v-container grid-list-xl>
    <v-layout
      row
      wrap
      align-start
    >
      <v-flex md1 />

      <v-flex md5>
        <strong class="step__text">Passo 2</strong>
        <h2 class="headline mt-1 mb-5">
          Qual valor?
        </h2>

        <v-form
          ref="form"
          v-model="valid"
        >
          <v-layout
            row
            wrap
          >
            <v-flex
              v-for="value in values"
              :key="value"
              md6
            >
              <e-card
                class="step__card mb-4"
                :class="{
                  ['step__card--active']: paymentValue === value,
                }"
                @click="setPaymentValue(value)"
              >
                R$ {{ value }},00
              </e-card>
            </v-flex>

            <v-flex md6>
              <e-card
                class="step__card"
                :class="{
                  ['step__card--active']: paymentValue && !values.includes(paymentValue),
                }"
                @click="setPaymentValue('other')"
              >
                Outro valor
              </e-card>
            </v-flex>
          </v-layout>

          <v-text-field
            v-if="paymentValue && !values.includes(paymentValue)"
            v-model="paymentValue"
            label="Informe o valor desejado"
            type="number"
            :rules="[rules.required]"
          />
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
              to="/marcelo/contribuir"
            >
              Voltar
            </e-button>
          </v-flex>

          <v-flex md7>
            <e-button
              block
              class="mt-3"
              type="primary"
              to="/marcelo/contribuir/dados"
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
          class="section__image-undraw-transfer-money"
          src="~/assets/images/undraw-transfer-money.svg"
        >
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
      values: [5, 10, 20, 40, 80],
      cpf: '',
      paymentValue: null,
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
    setPaymentValue(value) {
      console.log('OPA')
      this.paymentValue = value
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
