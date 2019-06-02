<template>
  <div>
    <div class="progress-background">
      <div
        class="progress-bar"
        :style="{ 'width': `${percentage}%` }"
      />

      <div
        v-for="i in installments.howMany"
        :key="i"
        :class="{ 'installment--paid': installments.howManyPaid >= i }"
        class="installment"
      />
    </div>
    <ul class="legend">
      <li class="legend__item legend__item--paid">
        Mensalidades pagas
      </li>
      <li class="legend__item legend__item--received">
        Contribuições recebidas
      </li>
      <li class="legend__item legend__item--missing">
        Quanto falta para bater a meta
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FundingProgressBar',
  props: {
    installments: {
      required: true,
      type: Object,
      validator: value => [
        'howMany',
        'howManyPaid',
      ].every(key => value.hasOwnProperty(key)),
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
