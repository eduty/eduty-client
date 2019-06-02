<template>
  <div>
    <funding-card />

    <v-layout
      class="mt-5"
      row
      wrap
    >
      <v-flex
        md7
      >
        <h2 class="headline mb-4">
          Porque contribuir para {{ user.name }}?
        </h2>

        <media-youtube
          class="mb-4"
          :video="campaignMedia.url"
        />

        <p class="body-2">
          {{ campaign.description }}
        </p>
      </v-flex>

      <v-spacer />

      <v-flex
        md4
      >
        <h2 class="headline mb-4">
          Últimas contribuições
        </h2>

        <e-card
          v-for="payment in campaign.payments"
          :key="payment"
          class="profile__card m-3"
        >
          <strong>{{ payment.user_name }}</strong> contribuiu com R$ {{ parseInt(payment.value) }}<br>
          <span>{{ paymentDate(payment.created_at) }}</span>
        </e-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { FundingCard } from '~/components/funding'
import { MediaYoutube } from '~/components/media'
import ECard from '~/components/ui/e-card'

function getMonth(month) {
  return {
    5: 'maio',
    6: 'junho',
  }[month]
}

export default {
  components: {
    ECard,
    FundingCard,
    MediaYoutube,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    campaign() {
      if (!this.user.campaigns.length) return {}

      return this.user.campaigns[0]
    },
    campaignMedia() {
      if (!this.campaign.campaign_media.length) return {}

      return this.campaign.campaign_media[0]
    },
  },
  methods: {
    paymentDate(date) {
      date = new Date('2019-06-02T04:24:45.028Z')

      return `${date.getDate()} de ${getMonth(date.getMonth())} de ${date.getFullYear()}`
    },
  },
}
</script>

<style lang="stylus" scoped>
.profile__card {
  box-shadow: none;
}
</style>
