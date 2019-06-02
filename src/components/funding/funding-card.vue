<template>
  <div class="progress-card">
    <img
      alt=""
      src="~/assets/images/user/raised-up-until-now.svg"
      class="progress-card__img"
    >

    <div class="progress-card__installments progress-card__installments--guaranteed">
      <div class="display-4">
        {{ installments.howManyPaid }}
      </div>
    </div>

    <div class="progress-card__installments progress-card__installments--pending">
      <div class="display-4">
        {{ installments.howMany - installments.howManyPaid }}
      </div>
    </div>

    <funding-progress-bar
      :installments="installments"
      :total="100"
      :progress="40"
      class="progress-card__bar"
    />
  </div>
</template>

<script>
import { FundingProgressBar } from '~/components/funding'

export default {
  components: {
    FundingProgressBar,
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
