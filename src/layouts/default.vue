<template>
  <v-app class="layout">
    <the-header />

    <v-content class="layout__main">
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

<style lang="stylus" scoped>
.layout__main {
  padding-top: 110px;
}
</style>
