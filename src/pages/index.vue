<template>
  <v-layout row wrap>
    <v-flex
      xs12
      sm8
      md6
    >
      <h1 class="display-3">
        Você foca nos estudos, e nós ajudamos com a mensalidade
      </h1>

      <v-btn
        to="/entrar"
      >
        Entrar
      </v-btn>

      <v-btn
        to="/cadastro"
      >
        Cadastrar
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {
  },
  async fetch({ $axios }) {
    const result = await $axios.$get('/api/ping')
    console.log(result)
  },
}
</script>
