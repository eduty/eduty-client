<template>
  <div class="progress-card">
    <img
      alt=""
      src="~/assets/images/user/raised-up-until-now.svg"
      class="progress-card__img"
    >

    <div class="progress-card__installments progress-card__installments--guaranteed">
      <div class="display-4 figure__figure">
        {{ Math.floor(installmentsLeft * percentWithEnoughMoney / 100) }}
      </div>

      <div>
        <strong class="figure__title">
          mensalidades garantidas
        </strong>

        <div class="figure__details">
          {{ formatPrice(moneyPaid) }} recebidos
        </div>
      </div>
    </div>

    <div class="progress-card__installments progress-card__installments--pending">
      <div class="display-4 figure__figure">
        {{ installmentsLeft + installmentsPaid - realAlreadyGuaranteeded }}
      </div>

      <div>
        <strong class="figure__title">
          mensalidades pendentes
        </strong>

        <div class="figure__details">
          {{ formatPrice(moneyLeft) }} em aberto
        </div>
      </div>
    </div>

    <FundingProgressBar
      :how-many="installmentsLeft + installmentsPaid"
      :how-many-paid="installmentsPaid"
      :total="100"
      :progress="percentWithEnoughMoney"
      class="progress-card__bar"
    />
  </div>
</template>

<script>
import _ from 'lodash'
import FundingProgressBar from '~/components/funding/funding-progress-bar.vue'

export default {
  components: {
    FundingProgressBar,
  },
  props: {
    installmentsLeft: {
      required: true,
      type: Number,
    },
    installmentsPaid: {
      required: true,
      type: Number,
    },
    moneyPaid: {
      required: true,
      type: Number,
    },
    moneyLeft: {
      required: true,
      type: Number,
    },
    percentWithEnoughMoney: {
      required: true,
      type: Number,
    },
  },
  computed: {
    realAlreadyGuaranteeded() {
      return Math.floor(this.installmentsLeft * this.percentWithEnoughMoney / 100)
    },
  },
  methods: {
    formatPrice(value) {
      return _.round(value, 2)
        .toLocaleString('pt-BR', {
          currency: 'BRL',
          style: 'currency',
        });
    },
  },
}
</script>

<style src="./funding-card.styl" lang="stylus" scoped />
