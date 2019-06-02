<template>
  <v-card
    v-bind="$attrs"
    class="e-card"
    :class="{
      [`e-card--${size}`]: size,
    }"
    v-on="$listeners"
  >
    <slot />
  </v-card>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '',
    },
  },
}
</script>

<style src="./e-card.styl" lang="stylus" scoped />
