<template>
  <v-container grid-list-xl>
    <v-layout
      row
      wrap
    >
      <v-flex md-1 />

      <v-flex md-5>
        <strong class="step__text">Passo 2</strong>
        <h2 class="headline mt-1 mb-4">
          Qual o seu sonho?
        </h2>

        <v-form
          ref="form"
          v-model="valid"
        >
          <v-text-field
            v-model="course"
            label="Qual a profissão do seus sonhos?"
            required
          />

          <v-layout
            row
            wrap
          >
            <v-flex
              xs12
              md6
            >
              <v-select
                :items="turns"
                label="Que horas você quer estudar?"
                outlined
              />
            </v-flex>

            <v-flex
              xs12
              md6
            >
              <v-select
                :items="modalidades"
                label="Qual modalidade?"
                outlined
              />
            </v-flex>
          </v-layout>

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
      turns: ['Manhã', 'Tarde', 'Noite'],
      modalidades: ['Presencial', 'EAD'],
    }
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
