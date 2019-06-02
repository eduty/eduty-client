<template>
  <v-btn
    v-bind="$attrs"
    depressed
    class="e-button"
    :class="[`e-button--${type}`]"
    v-on="$listeners"
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
        'outline',
        'primary',
      ].includes(value),
    },
  },
}
</script>

<style src="./e-button.styl" lang="stylus" scoped />
