<template>
  <v-btn
    depressed
    :class="{ [`e-button--${type}`]: type !== 'primary' }"
    class="e-button"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'EButton',
  props: {
    type: {
      default: 'primary',
      type: String,
      validator: value => [
        'primary',
      ].includes(value),
    },
  },
}
</script>

<style src="./e-button.styl" lang="stylus" scoped />
