<template>
  <v-container grid-list-xl>
    <v-layout
      row
      wrap
    >
      <v-flex
        sm12
        md5
      >
        <strong class="step__text">Passo 2</strong>

        <h2 class="headline mt-1 mb-4">
          Qual o seu sonho?
        </h2>

        <v-form
          ref="form"
          v-model="valid"
        >
          <div v-if="!courseId">
            <v-select
              v-model="course"
              :items="coursesMock"
              label="Qual o curso dos seus sonhos?"
              outlined
              :disabled="!coursesList"
              @change="onCourseChange"
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
                  v-model="turn"
                  :items="turns"
                  label="Em que período você quer estudar?"
                  @change="onCourseChange"
                />
              </v-flex>

              <v-flex
                xs12
                md6
              >
                <v-select
                  v-model="modalidade"
                  :items="modalidades"
                  label="Qual modalidade?"
                  outlined
                  @change="onCourseChange"
                />
              </v-flex>
            </v-layout>
          </div>

          <template v-if="availableChoices">
            <div class="mt-2 mb-3">
              <strong class="step__text">Selecione onde você quer estudar</strong>
            </div>

            <e-card
              v-for="availableChoice in availableChoices"
              :key="availableChoice.id"
              class="step__card mb-4"
              :class="{
                ['step__card--active']: courseId === availableChoice.id,
              }"
              size="small"
              @click="selectCourse(availableChoice.id)"
            >
              <div>
                <strong class="step__card-course">{{ availableChoice.name }}</strong>
                na {{ availableChoice.institution.name }} ({{ availableChoice.campus.name }})
              </div>

              <img
                class="step__card-course-icon"
                :src="availableChoice.institution.logo_url"
              >
            </e-card>

            <v-layout
              v-if="courseId"
              row
              wrap
            >
              <v-flex md5>
                <e-button
                  block
                  class="mt-3"
                  type="outline"
                  @click="selectCourse(null)"
                >
                  Voltar
                </e-button>
              </v-flex>

              <v-flex md7>
                <e-button
                  block
                  class="mt-3"
                  type="primary"
                  @click="submit"
                >
                  Próximo passo
                </e-button>
              </v-flex>
            </v-layout>
          </template>
        </v-form>
      </v-flex>

      <v-spacer class="hidden-sm-and-down" />

      <v-flex
        class="section__image hidden-sm-and-down"
        sm12
        md6
      >
        <img
          class="section__image-list"
          src="~/assets/images/list.svg"
        >

        <img
          class="section__image-woman hidden-md-and-down"
          src="~/assets/images/woman.svg"
        >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import EButton from '~/components/ui/e-button'
import ECard from '~/components/ui/e-card'
import coursesMock from '~/assets/data/courses.json'

export default {
  scrollToTop: true,
  middleware: 'protected',
  components: {
    EButton,
    ECard,
  },
  data() {
    return {
      availableChoices: null,
      course: '',
      courseId: null,
      coursesList: null,
      modalidade: null,
      turn: null,
      valid: false,
      turns: ['Manhã', 'Tarde', 'Noite'],
      rules: {
        required: value => !!value || 'Campo obrigatório.',
      },
      modalidades: ['Presencial', 'A distância'],
      coursesMock,
    }
  },
  async mounted() {
    this.coursesList = await this.$axios.$get('/api/courses')
  },
  methods: {
    ...mapActions('campaign', {
      setCourse: 'setCourse',
    }),
    onCourseChange() {
      if (this.course && this.modalidade && this.turn) {
        this.availableChoices = this.coursesList.filter(c => c.name === this.course).slice(0, 4)

        this.courseId = null
      } else {
        this.availableChoices = null
      }
    },
    selectCourse(courseId) {
      if (this.courseId === courseId) {
        this.courseId = null
      } else {
        this.courseId = courseId
      }
    },
    submit() {
      if (this.$refs.form.validate()) {
        const selectedCourse = this.coursesList.filter(c => c.id === this.courseId)[0]

        this.setCourse(selectedCourse)

        this.$router.push('/campanha/historia')
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

.section__image {
  display: flex;
  justify-content: flex-end;
}

.section__image-list {
  margin-right: 5px;
  margin-top: -65px;
}

.step__card-course-icon {
  max-height: 48px;
  max-width: 84px;
}

.step__action {
  width: 270px;
}
</style>
