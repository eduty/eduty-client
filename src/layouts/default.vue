<template>
  <v-app class="layout">
    <the-header />

    <v-content class="layout__main">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer
      app
      class="pa-3"
    >
      <v-container>
        <v-spacer />
        <div>&copy; {{ new Date().getFullYear() }}</div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { TheHeader } from '~/components/layout'

export default {
  components: {
    TheHeader,
  },
}
</script>

<style lang="stylus" scoped>
.layout__main {
  padding-top: 110px;
}
</style>
