<template>
  <div class="progress-card">
    <img
      alt=""
      src="~/assets/images/user/raised-up-until-now.svg"
      class="progress-card__img"
    >

    <div class="progress-card__installments progress-card__installments--guaranteed">
      <div class="display-4 figure__figure">
        {{ installments.howManyPaid }}
      </div>

      <div>
        <strong class="figure__title">
          mensalidades garantidas
        </strong>

        <div class="figure__details">
          R$ CARTIADO recebidos
        </div>
      </div>
    </div>

    <div class="progress-card__installments progress-card__installments--pending">
      <div class="display-4 figure__figure">
        {{ installments.howMany - installments.howManyPaid }}
      </div>

      <div>
        <strong class="figure__title">
          mensalidades pendentes
        </strong>

        <div class="figure__details">
          R$ CARTIADO em aberto
        </div>
      </div>
    </div>

    <FundingProgressBar
      :installments="installments"
      :total="100"
      :progress="40"
      class="progress-card__bar"
    />
  </div>
</template>

<script>
import FundingProgressBar from '~/components/funding/funding-progress-bar.vue'

export default {
  components: {
    FundingProgressBar,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    installments() {
      return {
        howMany: 33,
        howManyPaid: 6,
      }
    },
  },
}
</script>

<style src="./funding-card.styl" lang="stylus" scoped />
