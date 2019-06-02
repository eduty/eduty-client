<template>
  <header class="header">
    <v-toolbar
      app
      flat
      height="auto"
    >
      <v-container class="header__container py-0">
        <v-toolbar-side-icon
          v-if="isAuthenticated"
          @click="drawer = !drawer"
        />

        <nuxt-link
          class="header__logo"
          to="/"
        >
          <img
            alt="Eduty"
            title="Eduty"
            src="~/assets/images/logo.svg"
          >
        </nuxt-link>

        <v-spacer />

        <v-toolbar-items class="header__nav">
          <nuxt-link
            class="header__link"
            to="/for-business"
          >
            Eduty for business
          </nuxt-link>

          <EButton
            class="header__link"
            type="outline"
            to="/entrar"
          >
            Entrar
          </EButton>
        </v-toolbar-items>
      </v-container>
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
