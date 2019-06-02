<template>
  <v-layout>
    <v-flex text-xs-center>
      <UserAvatar :size="200" />
      <h1>{{ user.fullName }}</h1>
      <p>
        {{ $route.params.userId }}
      </p>

      oi esse é meu projeto

      <FundingProgressBar
        :installments="installments"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import { FundingProgressBar } from '~/components/funding'
import { UserAvatar } from '~/components/user'
import { mapState } from 'vuex'

export default {
  components: {
    FundingProgressBar,
    UserAvatar,
  },
  computed: {
    ...mapState('user', [
      'user',
    ]),
    installments() {
      return [
        ...Array(3).fill({
          paid: true,
        }),
        ...Array(7).fill({
          paid: false,
        }),
      ]
    },
  },
}
</script>
