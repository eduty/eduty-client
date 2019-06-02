<template>
  <div>
    <div class="section section--dark">
      <v-container grid-list-xl>
        <v-layout
          row
          wrap
          align-center
        >
          <v-flex
            xs12
            sm8
            md6
          >
            <h1 class="display-3 mb-5">
              Crie suas próprias bolsas de estudo para seus funcionários
            </h1>

            <e-button to="/campanha">
              Criar bolsas
            </e-button>
          </v-flex>

          <v-flex
            xs12
            sm8
            md6
          >
            <img src="~/assets/images/home/hire.svg" style="width: 100%">
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <img
      class="section__curve section__curve--dark"
      src="~/assets/images/home/section-curve.svg"
    >

    <div class="section section--highlight">
      <v-container grid-list-xl>
        <v-layout
          row
          wrap
          align-center
        >
          <v-flex
            xs12
            sm8
            md8
            lg6
          >
            <img src="~/assets/images/home/undraw-savings.svg">
          </v-flex>

          <v-flex
            xs12
            sm4
            md4
            lg6
          >
            <h1 class="display-4 mb-5">
              O que é o <span class="section__emphasis">eduty?</span>
            </h1>

            <p class="body-2">
              Somos uma plataforma para financiamento contínuo e coletivo para quem precisa de uma ajudinha para estudar.
            </p>

            <p class="body-2">
              Pioneiros no Brasil focados em educação, somos o seu parceiro para ajudar a levantar fundos para pagar a sua graduação, sua pós ou até mesmo aquele curso no exterior que você sempre sonhou.
            </p>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div class="section section--highlight">
      <v-container grid-list-xl>
        <h1 class="display-4 mb-5 pb-4">
          Como <span class="section__emphasis">funciona?</span>
        </h1>

        <v-layout
          row
          wrap
        >
          <v-flex
            sm12
            md4
          >
            <e-card class="section__card">
              <img
                class="mt-1 mb-3"
                src="~/assets/images/home/create.svg"
              >

              <h2 class="headline mb-3">
                Cadastre sua empresa e importe seus funcionários
              </h2>

              <p>
                Você cadastra sua empresa em nossa plataforma, em seguida importa seus funcionários e nós enviaremos convites para eles acessarem a nossa plataforma e completarem seus cadastros
              </p>
            </e-card>
          </v-flex>

          <v-flex
            sm12
            md4
          >
            <e-card class="section__card section__card--two">
              <img
                class="mt-1 mb-3"
                src="~/assets/images/home/hire.svg"
                height="120px"
              >

              <h2 class="headline mb-3">
                Crie bolsas de estudos para seus funcionários
              </h2>

              <p>
                Para cada funcionário cadastratado você poderá estipular um valor para a bolsa de estudos, e eles poderão utilizar esse crédito em graduações, pós-graduações, cursos EAD e etc
              </p>
            </e-card>
          </v-flex>

          <v-flex
            sm12
            md4
          >
            <e-card class="section__card section__card--three">
              <img
                class="mt-1 mb-3"
                src="~/assets/images/home/undraw_dashboard_nklg.svg"
                height="150px"
              >

              <h2 class="headline mb-3">
                Acompanhe o desempenho
              </h2>

              <p>
                Nós cuidamos do pagamento das contribuições, do investimendo delas em CDI para garantir um crescimento extra e você só irá acompanhar o desempenho do seu funcionário
              </p>
            </e-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <img
      class="section__curve section__curve--rotate section__curve--spaced"
      src="~/assets/images/home/section-curve.svg"
    >

    <div class="section section--last mb-5">
      <v-container grid-list-xl>
        <h1 class="display-4 mb-5">
          Comece a qualificar seus funcionários agora mesmo
        </h1>

        <e-button
          class="section__action"
          to="/campanha"
        >
          Criar bolsas
        </e-button>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import EButton from '~/components/ui/e-button'
import ECard from '~/components/ui/e-card'

export default {
  layout: 'for-business',
  components: {
    EButton,
    ECard,
  },
  computed: {
    ...mapState('auth', [
      'currentUser',
    ]),
    ...mapGetters('auth', [
      'isAuthenticated',
      'campaigns',
    ]),
  },
  async fetch({ $axios }) {
    const result = await $axios.$get('/api/ping')
    console.log(result)
  },
}
</script>

<style lang="stylus" scoped>
.section {
  padding-top: 112px;
}

.section--dark {
  background-color: $color-primary;
  color: white;
}

.section--highlight {
  background-color: $color-light;
}

.section--last {
  text-align: center;
  max-width: 930px;
  margin: auto;
}

.section__curve {
  display: block;
  width: 100%;
}

.section__curve--dark {
  background-color: $color-primary;
}

.section__curve--rotate {
  transform: rotate(-360deg) scaleY(-1);
}

.section__curve--spaced {
  margin-bottom: 180px;
}

.section__emphasis {
  display: inline-block;
  position: relative;
  z-index: 1;

  &::after {
    background-color: $color-accent;
    content: '';
    display: block;
    height: 6px;
    transform: translateX(-5px);
    width: calc(100% + 10px);
    z-index: -1;
    position: absolute;
    bottom: -4px;
  }
}

.section__card {
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: auto;
  margin-bottom: -220px;
  text-align: center;
  z-index: 1;
}

.section__card--two {
  margin-top: 80px;
}

.section__card--three {
  margin-top: 32px;
}

.section__action {
  width: 370px;
}
</style>
