<template>
  <header class="header">
    <v-toolbar
      app
      flat
      height="auto"
    >
      <img
        alt="Eduty"
        title="Eduty"
        src="~/assets/images/logo.svg"
      >

      <v-spacer />

      <v-toolbar-items class="header__nav">
        <e-button
          class="header__link"
          type="outline"
          to="/entrar"
          flat
        >
          Sair
          <v-icon right dark>
            fas faTimes
          </v-icon>
        </e-button>
      </v-toolbar-items>
    </v-toolbar>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import EButton from '~/components/ui/e-button'

export default {
  components: {
    EButton,
  },
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/',
        },
      ],
    }
  },
  computed: {
    ...mapGetters('auth', [
      'isAuthenticated',
    ]),
  },
}
</script>

<style src="./the-header.styl" lang="stylus" scoped></style>
