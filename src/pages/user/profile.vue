<template>
  <v-layout>
    <v-flex text-xs-center>
      <UserAvatar :size="200" />
      <h1>{{ user.fullName }}</h1>
      <p>
        {{ $route.params.userId }}
      </p>

      oi esse é meu projeto
    </v-flex>
  </v-layout>
</template>

<script>
import { UserAvatar } from '~/components/user'
import { mapState } from 'vuex'

export default {
  components: {
    UserAvatar,
  },
  computed: {
    ...mapState('user', [
      'user',
    ]),
  },
}
</script>
