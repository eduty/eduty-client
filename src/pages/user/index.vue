<template>
  <div>
    <nuxt-child :user="user" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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
