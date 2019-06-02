<template>
  <div>
    <the-header />
    <h1>Criando sua campanha</h1>

    <nuxt-child />
  </div>
</template>

<script>
import { TheHeader } from '~/components/layout'

export default {
  components: {
    TheHeader,
  },
}
</script>
