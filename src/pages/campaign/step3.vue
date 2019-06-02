<template>
  <v-container grid-list-xl>
    <v-layout
      row
      wrap
    >
      <v-flex md-1 />

      <v-flex md-5>
        <strong class="step__text">Passo 3</strong>

        <h2 class="headline mt-1 mb-4">
          Porque contribuir com seus estudos?
        </h2>

        <v-form
          ref="form"
          v-model="valid"
        >
          <v-text-field
            v-model="youtube"
            label="Adicione um vídeo do Youtube"
          />

          <v-textarea
            v-model="history"
            label="Conte a sua história"
          />

          <e-button
            class="step__action mt-3 mr-3"
            type="outline"
          >
            Voltar
          </e-button>

          <e-button
            class="step__action mt-3"
            type="primary"
          >
            Próximo passo
          </e-button>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EButton from '~/components/ui/e-button'

export default {
  components: {
    EButton,
  },
  data() {
    return {
      university: '',
      turns: ['Manhã', 'Tarde', 'Noite'],
      modalidades: ['Presencial', 'EAD'],
    }
  },
  methods: {
  },
}
</script>

<style lang="stylus" scoped>
.step__text {
  color: $color-gray;
  text-transform: uppercase;
}

.step__action {
  width: 270px;
}
</style>
