<template>
  <v-app class="layout">
    <the-header />

    <v-content class="layout__main">
      <nuxt />
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
body {
  overflow-x: hidden;
}

.layout__main {
  padding-top: 60px;
}
</style>
