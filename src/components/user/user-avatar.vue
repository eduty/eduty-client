<template>
  <v-avatar
    :size="size"
    color="grey lighten-4"
  >
    <img
      :src="imageSource"
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
  props: {
    size: {
      default: 50,
      type: [Number, String],
      validator: value => value >= 1 && value <= 2048,
    },
  },
  computed: {
    ...mapState('user-page', {
      userPageEmail: state => state.user.email,
    }),
    emailHash() {
      return md5(this.userPageEmail)
    },
    imageSource() {
      return `https://www.gravatar.com/avatar/${this.emailHash}?s=${this.size}&d=identicon`
    },
  },
}
</script>
