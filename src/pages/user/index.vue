<template>
  <div class="background">
    <user-header
      :contributors="-1"
      :user="user"
    />

    <user-options />

    <v-container>
      <nuxt-child />
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { UserHeader, UserOptions } from '~/components/user'

export default {
  components: {
    UserHeader,
    UserOptions,
  },
  computed: {
    ...mapState('user-page', [
      'user',
    ]),
  },
  async fetch({ $axios, params, store }) {
    const result = await $axios.$get(`/api/users/${params.userId}`)
    await store.dispatch('user-page/setUser', result)
  },
}
</script>

<style lang="stylus">
.background {
  background-color: $color-light;
}
</style>
