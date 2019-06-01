<template>
  <v-layout
    column
    justify-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <h1>Eduty</h1>

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
