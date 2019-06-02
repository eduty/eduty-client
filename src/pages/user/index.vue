<template>
  <div class="background">
    <user-header
      :contributors="-1"
      :user="currentUser"
    />

    <user-options />

    <v-container>
      <nuxt-child />
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { UserHeader, UserOptions } from '~/components/user'

export default {
  components: {
    UserHeader,
    UserOptions,
  },
  computed: {
    ...mapState('auth', [
      'currentUser',
    ]),
  },
  mounted() {
    if (this.currentUser) return

    this.$axios.$get('/api/users/1')
      .then(this.setUser)
      .catch(({ status }) => Promise.reject(status))
  },
  methods: {
    ...mapActions('auth', [
      'setUser',
    ]),
  },
}
</script>

<style lang="stylus">
.background {
  background-color: $color-light;
}
</style>
