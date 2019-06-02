<template>
  <div class="progress-card">
    <img
      alt=""
      src="~/assets/images/user/raised-up-until-now.svg"
      class="progress-card__img"
    >

    <funding-progress-bar
      :installments="installments"
      :total="100"
      :progress="40"
      class="progress-card__bar"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FundingProgressBar } from '~/components/funding'

export default {
  components: {
    FundingProgressBar,
  },
  computed: {
    ...mapGetters('user', {
      courseTotalPrice: ({ campaign }) => parseFloat((campaign.course || { price: '0' }).price, 10),
      totalRaised: ({ campaign }) => campaign.currentBalance,
    }),
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
