<template>
  <header
    :class="{ 'header--no-delimiter': $route.name.startsWith('campaign') }"
    class="header"
  >
    <v-navigation-drawer
      v-if="isAuthenticated"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

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
    ...mapGetters('user', [
      'isAuthenticated',
    ]),
  },
}
</script>

<style src="./the-header.styl" lang="stylus" scoped></style>
