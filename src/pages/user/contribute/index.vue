<template>
  <div>
    <v-container>
      <h1 class="headline">
        Contribua com a campanha
      </h1>
    </v-container>

    <img
      class="section__curve"
      src="~/assets/images/home/section-curve.svg"
    >

    <div class="section pb-5">
      <nuxt-child />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.section {
  background-color: $color-light;
  padding: 52px 0 112px;
}

.section__curve {
  display: block;
  width: 100%;
}
</style>
