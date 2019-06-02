<template>
  <div>
    <funding-card />

    <v-layout
      class="mt-5"
      row
      wrap
    >
      <v-flex
        md6
      >
        <h2 class="headline mb-4">
          Porque contribuir a Marcela?
        </h2>

        <media-youtube
          class="mb-4"
          videoId="9nP6U4uiZLA"
        />

        <p class="body-2">
          With this new design, a website’s branding can be front and center, helping you better understand where the information is coming from and what pages have what you’re looking for.
        </p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { FundingCard } from '~/components/funding'
import { MediaYoutube } from '~/components/media'

export default {
  components: {
    FundingCard,
    MediaYoutube,
  },
}
</script>
