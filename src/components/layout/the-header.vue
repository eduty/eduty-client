<template>
  <header
    :class="{
      'header--no-delimiter': $route.name !== 'home',
      'header--for-business': forBusiness,
    }"
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
          <v-toolbar-items
            v-if="forBusiness"
            class="header__nav"
          >
            <span class="ml-3">for business</span>
          </v-toolbar-items>
        </nuxt-link>

        <v-spacer />

        <v-toolbar-items class="header__nav">
          <nuxt-link
            v-if="!forBusiness"
            class="header__link"
            to="/for-business"
          >
            Eduty for business
          </nuxt-link>

          <nuxt-link
            v-if="isAuthenticated"
            class="header__link"
            :to="`/${currentUser.slug}`"
          >
            {{ currentUser.name }}
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
import { mapActions, mapGetters, mapState } from 'vuex'
import EButton from '~/components/ui/e-button'

export default {
  components: {
    EButton,
  },
  props: {
    forBusiness: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    ...mapActions('auth', [
      'setUser',
    ]),
    ...mapState('auth', [
      'currentUser',
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
