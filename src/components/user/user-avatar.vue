<template>
  <v-avatar
    :tile="tile"
    :size="avatarSize"
    color="grey lighten-4"
  >
    <img
      :src="`https://www.gravatar.com/avatar/${emailHash}?s=${size}`"
      :height="size"
      :width="size"
      alt="avatar"
    >
  </v-avatar>
</template>

<script>
import md5 from 'md5'
import { mapState } from 'vuex'

// https://en.gravatar.com/site/implement/images/
// https://en.gravatar.com/site/implement/hash/
export default {
  name: 'UserAvatar',
  computed: {
    ...mapState('user', [
      'user',
    ]),
    emailHash() {
      return md5(this.user.email)
    },
  },
}
</script>
