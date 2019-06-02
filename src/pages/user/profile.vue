<template>
  <div>
    <funding-progressBar
      :installments="installments"
      :total="courseTotalPrice"
      :progress="totalRaised"
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
      return [
        ...Array(6).fill({
          paid: true,
        }),
        ...Array(27).fill({
          paid: false,
        }),
      ]
    },
  },
}
</script>
