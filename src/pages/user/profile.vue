<template>
  <div class="profile">
    <user-header
      :contributors="campaignPayments.length"
      :user="user"
    />

    <user-options
      :user="user"
      class="mb-5"
    />

    <v-container
      grid-list-xl
    >
      <funding-card
        :user="user"
        class="mt-3"
      />

      <v-layout
        class="mt-5 pt-3"
        row
        wrap
      >
        <v-flex
          v-if="user.campaigns.length"
          md7
        >
          <h2 class="headline mb-4">
            Porque contribuir para {{ user.name }}?
          </h2>

          <media-youtube
            v-if="campaignMedia && campaignMedia.url"
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
            class="profile__card mb-3"
          >
            <strong>Marcelo Fraga</strong> contribuiu com R$ 50<br>
            <span>30 de maio de 2019</span>
          </e-card>

          <e-card
            class="profile__card mb-3"
          >
            <strong>Luã Vaz</strong> contribuiu com R$ 20<br>
            <span>2 de junho de 2019</span>
          </e-card>

          <e-card
            v-for="(payment, index) in campaignPayments"
            :key="index"
            class="profile__card mb-3"
          >
            <strong>{{ payment.user_name }}</strong> contribuiu com R$ {{ parseInt(payment.value) }}<br>
            <span>{{ paymentDate(payment.created_at) }}</span>
          </e-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { FundingCard } from '~/components/funding'
import { MediaYoutube } from '~/components/media'
import { UserHeader, UserOptions } from '~/components/user'
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
    UserHeader,
    UserOptions,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  computed: {
    campaign() {
      if (!this.user.campaigns || !this.user.campaigns.length) return {}

      return this.user.campaigns.slice(-1)[0]
    },
    campaignMedia() {
      return this.user.campaigns.length && this.campaign.campaign_media[0]
    },
    campaignPayments() {
      return (this.user.campaigns.length && this.campaign.payments) || []
    },
  },
  methods: {
    paymentDate(date) {
      date = new Date(date)

      return `${date.getDate()} de ${getMonth(date.getMonth())} de ${date.getFullYear()}`
    },
  },
  scrollToTop: true,
}
</script>

<style lang="stylus" scoped>
.profile {
  background-color: $color-light;
  margin-top: 50px;
  padding-bottom: 60px;
}

.profile__card {
  box-shadow: none;
}
</style>
