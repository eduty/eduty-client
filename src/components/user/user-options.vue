<template>
  <v-container>
    <v-layout>
      <v-flex offset-md2>
        <v-tabs class="tabs">
          <v-tab
            class="options-text"
            :to="{ name: 'user-profile', params: { userId: currentUser.slug } }"
          >
            Perfil
          </v-tab>
          <v-tab
            class="options-text"
            :to="{ name: 'user-follow-up', params: { userId: currentUser.slug } }"
          >
            Acompanhamento
          </v-tab>
        </v-tabs>
      </v-flex>

      <v-spacer />

      <e-button
        block
        :to="{ name: 'user-contribute', params: { userId: currentUser.slug } }"
        @click="$emit('contribute')"
      >
        Contribuir
      </e-button>
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
