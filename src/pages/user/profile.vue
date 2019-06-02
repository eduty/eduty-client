<template>
  <div>
    <user-header
      :contributors="-1"
      :user="user"
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
import EButton from '~/components/ui/e-button'
import { FundingProgressBar } from '~/components/funding'
import { UserHeader } from '~/components/user'
import { mapState } from 'vuex'

export default {
  components: {
    EButton,
    FundingProgressBar,
    UserHeader,
  },
  computed: {
    ...mapState('user', [
      'user',
    ]),
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
