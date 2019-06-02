<template>
  <div class="user-header">
    <v-container class="user-header__container">
      <v-layout
        row
        wrap
      >
        <v-flex
          lg2
          sm3
        >
          <UserAvatar
            size="170"
            class="user-header__avatar"
          />
        </v-flex>

        <v-flex
          md10
          class="user-header__wrapper"
        >
          <h1 class="display-3">
            {{ user.name }}
          </h1>

          <strong class="user-avatar__contrib title">
            {{ contributors }} contribuidores
          </strong>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { UserAvatar } from '~/components/user'

export default {
  components: {
    UserAvatar,
  },
  props: {
    contributors: {
      required: true,
      type: Number,
    },
    user: {
      type: Object,
      required: true,
      validator: value => [
        'name',
      ].every(item => value.hasOwnProperty(item)),
    },
  },
}
</script>

<style src="./user-header.styl" lang="stylus" scoped />
