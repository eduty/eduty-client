<template>
  <div class="user-header">
    <v-container class="user-header__container">
      <v-layout
        row
        wrap
      >
        <v-flex
          class="hidden-sm-and-down"
          lg2
          md3
        >
          <UserAvatar
            :user="user"
            size="170"
            class="user-header__avatar"
          />
        </v-flex>

        <v-flex
          lg10
          md9
          class="user-header__wrapper"
        >
          <h1 class="display-3">
            {{ user.name }}
          </h1>

          <strong
            v-if="contributors"
            class="user-avatar__contrib title"
          >
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
    },
  },
}
</script>

<style src="./user-header.styl" lang="stylus" scoped />
