<template>
  <v-container>
    <v-layout>
      <v-flex
        offset-sm3
        offset-md2
        offset-lg2
        md7
      >
        <nav class="user-options__nav">
          <a class="user-options__nav-link user-options__nav-link--active">Perfil</a>
          <a class="user-options__nav-link">Acompanhamento</a>
        </nav>
      </v-flex>

      <v-flex md3>
        <e-button
          block
          :to="{ name: 'user-contribute', params: { userId: currentUser.slug } }"
          @click="$emit('contribute')"
        >
          Contribuir
        </e-button>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import EButton from '~/components/ui/e-button'

export default {
  components: {
    EButton,
  },
  computed: {
    ...mapState('auth', [
      'currentUser',
    ]),
  },
}
</script>

<style src="./user-options.styl" lang="stylus" scoped />
