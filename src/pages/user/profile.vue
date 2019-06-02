<template>
  <div>
    <user-header
      :contributors="-1"
      :user="currentUser"
    />

    <v-container>
      <e-button>
        Eduty-me
      </e-button>

      <funding-progressBar
        :installments="installments"
        :total="100"
        :progress="40"
      />
    </v-container>
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
    ...mapGetters('auth', {
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
