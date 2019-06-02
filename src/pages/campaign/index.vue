<template>
  <div>
    <the-other-header />

    <v-container>
      <h1 class="headline">
        Criando sua campanha
      </h1>
    </v-container>

    <img
      class="section__curve"
      src="~/assets/images/home/section-curve.svg"
    >

    <div class="section">
      <nuxt-child />
    </div>
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

<style lang="stylus" scoped>
.section {
  background-color: $color-light;
}

.section__curve {
  display: block;
  width: 100%;
}
</style>
