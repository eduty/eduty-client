<template>
  <v-layout>
    <v-flex text-xs-center>
      <UserAvatar :size="200" />
      <p>
        {{ $route.params.userId }}
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
import { UserAvatar } from '~/components/user'

export default {
  components: {
    UserAvatar,
  },
}
</script>
