<template>
  <v-container grid-list-xl>
    <v-layout
      row
      wrap
      align-center
    >
      <v-flex md1 />

      <v-flex md5>
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

          <v-layout
            row
            wrap
          >
            <v-flex md5>
              <e-button
                block
                class="mt-3"
                type="outline"
                to="/campanha/sonho"
              >
                Voltar
              </e-button>
            </v-flex>

            <v-flex md7>
              <e-button
                block
                class="mt-3"
                type="primary"
                to="/campanha/sucesso"
              >
                Concluir
              </e-button>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>

      <v-flex
        class="section__image"
        md6
      >
        <!-- <img
          class="section__image-list"
          src="~/assets/images/list.svg"
        > -->

        <img
          class="section__image-woman-balloon"
          src="~/assets/images/woman-balloon.svg"
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EButton from '~/components/ui/e-button'

export default {
  middleware: 'protected',
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

.section__image {
  display: flex;
  justify-content: flex-end;
  margin-top: -60px;
}

// .section__image-list {
//   margin-right: 5px;
//   margin-top: -65px;
// }
</style>
