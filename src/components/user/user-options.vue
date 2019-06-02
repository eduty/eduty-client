<template>
  <v-container>
    <v-layout>
      <v-flex offset-md2>
        <v-tabs>
          <v-tab class="options-text">
            Perfil
          </v-tab>
          <v-tab class="options-text">
            Acompanhamento
          </v-tab>
        </v-tabs>
      </v-flex>

      <v-spacer />

      <e-button
        block
        @click="$emit('contribute')"
      >
        Contribuir
      </e-button>
    </v-layout>
  </v-container>
</template>

<script>
import EButton from '~/components/ui/e-button'

export default {
  components: {
    EButton,
  },
}
</script>

<style src="./user-options.styl" lang="stylus" scoped />
