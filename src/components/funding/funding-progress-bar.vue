<template>
  <div class="progress-background">
    100%
    <div
      v-for="(installment, index) in installments"
      :key="index"
      :class="{ 'installment--paid': installment.paid }"
      class="installment"
    />
  </div>
</template>

<script>
export default {
  name: 'FundingProgressBar',
  props: {
    installments: {
      required: true,
      type: Array,
      validator: array => array.every(item => [
        'paid',
      ].every(key => item.hasOwnProperty(key))),
    },
  },
}
</script>

<style src="./funding-progress-bar.styl" lang="stylus" scoped>
