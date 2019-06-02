<template>
  <v-container grid-list-xl>
    <v-layout
      row
      wrap
      align-start
    >
      <v-flex md5>
        <strong class="step__text">Passo 2</strong>
        <h2 class="headline mt-1 mb-5">
          Qual valor?
        </h2>

        <v-alert
          class="mb-4"
          :value="valueError"
          type="error"
        >
          Preencha um valor!
        </v-alert>

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
        md7
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
import { mapActions, mapState } from 'vuex'
import EButton from '~/components/ui/e-button'
import ECard from '~/components/ui/e-card'

export default {
  scrollToTop: true,
  components: {
    EButton,
    ECard,
  },
  data() {
    return {
      values: [5, 10, 20, 40, 80],
      paymentValue: null,
      rules: {
        required: value => !!value || 'Campo obrigatório.',
      },
      valid: false,
      valueError: false,
    }
  },
  computed: {
    ...mapState('user-page', {
      userPageSlug: state => state.user.slug,
    }),
  },
  methods: {
    ...mapActions('payment', {
      setValue: 'setValue',
    }),
    lastStep() {
      this.$router.push(`/${this.userPageSlug}/contribuir`)
    },
    nextStep() {
      this.$router.push(`/${this.userPageSlug}/contribuir/dados`)
    },
    submit() {
      if (this.$refs.form.validate() && this.paymentValue) {
        this.setValue(this.paymentValue)

        this.nextStep()
      } else {
        this.valueError = true
      }
    },
    setPaymentValue(value) {
      this.paymentValue = value

      this.valueError = false
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
