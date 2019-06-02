<template>
  <div>
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
import { mapActions, mapState } from 'vuex'
import { UserHeader, UserOptions } from '~/components/user'

export default {
  components: {
    UserHeader,
    UserOptions,
  },
  computed: {
    ...mapState('user', [
      'user',
    ]),
  },
  mounted() {
    if (this.user) return

    this.$axios.$get('/api/users/1')
      .then(this.setUser)
      .catch(({ status }) => Promise.reject(status))
  },
  methods: {
    ...mapActions('user', [
      'setUser',
    ]),
  },
}
</script>

<style lang="stylus">
.v-content {
  background-color: $color-light !important;
}
</style>
