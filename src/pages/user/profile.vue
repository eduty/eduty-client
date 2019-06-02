<template>
  <div>
    <funding-progressBar
      :installments="installments"
      :total="100"
      :progress="40"
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
