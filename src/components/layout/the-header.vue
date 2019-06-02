<template>
  <header
    :class="{ 'header--no-delimiter': $route.name !== 'home' }"
    class="header"
  >
    <v-toolbar
      app
      flat
      height="auto"
    >
      <v-container class="header__container py-0">
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

          <a
            v-if="isAuthenticated"
            class="header__link"
            @click="logout"
          >
            Sair
          </a>
          <EButton
            v-else
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
import { mapActions, mapGetters } from 'vuex'
import EButton from '~/components/ui/e-button'

export default {
  components: {
    EButton,
  },
  computed: {
    ...mapActions('auth', [
      'setUser',
    ]),
    ...mapGetters('auth', [
      'isAuthenticated',
    ]),
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/setUser', null)
      this.$router.push('/')
    },
  },
}
</script>

<style src="./the-header.styl" lang="stylus" scoped></style>
