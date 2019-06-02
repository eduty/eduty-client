<template>
  <v-app>
    <the-header />

    <v-content style="padding-top: 140px;">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <the-footer />
  </v-app>
</template>

<script>
import { TheFooter, TheHeader } from '~/components/layout'

export default {
  components: {
    TheFooter,
    TheHeader,
  },
}
</script>
