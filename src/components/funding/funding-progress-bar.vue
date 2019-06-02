<template>
  <div class="progress-background">
    <div
      class="progress-bar"
      :style="{ 'width': `${percentage}%` }"
    />

    <span class="progress-indicator">100%</span>

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
    total: {
      required: true,
      type: Number,
    },
    progress: {
      required: true,
      type: Number,
    },
  },
  computed: {
    percentage() {
      return this.progress / this.total * 100
    },
  },
}
</script>

<style src="./funding-progress-bar.styl" lang="stylus" scoped>
