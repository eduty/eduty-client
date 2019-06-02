<template>
  <v-container>
    <v-layout>
      <v-flex offset-md2>
        <v-tabs>
          <v-tab
            class="options-text"
            :to="{ name: 'user-profile', params: { userId: user.slug } }"
          >
            Perfil
          </v-tab>
          <v-tab
            class="options-text"
            :to="{ name: 'user-follow-up', params: { userId: user.slug } }"
          >
            Acompanhamento
          </v-tab>
        </v-tabs>
      </v-flex>

      <v-spacer />

      <e-button
        block
        :to="{ name: 'user-contribute', params: { userId: user.slug } }"
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
    ...mapState('user', [
      'user',
    ]),
  },
}
</script>

<style src="./user-options.styl" lang="stylus" scoped />
