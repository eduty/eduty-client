<template>
  <v-app>
    <Header />

    <v-content style="padding-top: 80px;">
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
import { Header } from '~/components/layout'

export default {
  components: {
    Header,
  },
}
</script>
