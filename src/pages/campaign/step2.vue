<template>
  <v-container grid-list-xl>
    <v-layout
      row
      wrap
    >
      <v-flex md1 />

      <v-flex md5>
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

          <div class="mt-2 mb-3">
            <strong class="step__text">Selecione onde você quer estudar</strong>
          </div>

          <e-card
            v-if="!university.length || university === 'anhanguera'"
            class="step__card mb-4"
            :class="{
              ['step__card--active']: university === 'anhanguera',
            }"
            size="small"
            @click="selectUniversity('anhanguera')"
          >
            <div>
              <strong class="step__card-course">Direito</strong>
              na Anhanguera
            </div>

            <img src="http://lorempixel.com/84/48/">
          </e-card>

          <e-card
            v-if="!university.length || university === 'unip'"
            class="step__card mb-4"
            :class="{
              ['step__card--active']: university === 'unip',
            }"
            size="small"
            @click="selectUniversity('unip')"
          >
            <div>
              <strong class="step__card-course">Direito</strong>
              na Unip
            </div>

            <img src="http://lorempixel.com/84/48/">
          </e-card>

          <v-layout
            row
            wrap
          >
            <v-flex md5>
              <e-button
                v-if="university.length"
                block
                class="mt-3"
                type="outline"
                @click="selectUniversity('')"
              >
                Voltar
              </e-button>
            </v-flex>

            <v-flex md7>
              <e-button
                v-if="university.length"
                block
                class="mt-3"
                type="primary"
                to="/campanha/historia"
              >
                Próximo passo
              </e-button>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EButton from '~/components/ui/e-button'
import ECard from '~/components/ui/e-card'

export default {
  middleware: 'protected',
  components: {
    EButton,
    ECard,
  },
  data() {
    return {
      university: '',
      turns: ['Manhã', 'Tarde', 'Noite'],
      modalidades: ['Presencial', 'EAD'],
    }
  },
  methods: {
    selectUniversity(university) {
      if (this.university === university) {
        this.university = ''
      } else {
        this.university = university
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.step__text {
  color: $color-gray;
  text-transform: uppercase;
}

.step__card {
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.step__card--active {
  box-shadow: inset 0 0 0 2px $color-accent;
}

.step__card-course {
  display: block;

  .step__card--active & {
    color: $color-accent;
  }
}
</style>
