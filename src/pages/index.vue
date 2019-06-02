<template>
  <v-layout row wrap align-center>
    <v-flex
      xs12
      sm8
      md6
    >
      <h1 class="display-3 mb-5">
        Você foca nos estudos, e nós ajudamos com a mensalidade
      </h1>

      <e-button>Iniciar minha campanha</e-button>
    </v-flex>

    <v-flex
      xs12
      sm8
      md6
    >
      <img src="~/assets/images/undraw-book-lover.svg">
    </v-flex>
  </v-layout>
</template>

<script>
import EButton from '~/components/ui/e-button'

export default {
  components: {
    EButton,
  },
  async fetch({ $axios }) {
    const result = await $axios.$get('/api/ping')
    console.log(result)
  },
}
</script>
