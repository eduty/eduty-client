<template>
  <div>
    <the-other-header />
    <h1>Criando sua campanha</h1>

    <nuxt-child />
  </div>
</template>

<script>
import { TheOtherHeader } from '~/components/layout'

export default {
  components: {
    TheOtherHeader,
  },
}
</script>
