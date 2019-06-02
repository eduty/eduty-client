<template>
  <div>
    <div class="section">
      <v-container grid-list-xl>
        <v-layout
          class="pt-3"
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
              Você foca nos estudos, e nós ajudamos com a mensalidade
            </h1>

            <e-button>Iniciar minha campanha</e-button>
          </v-flex>

          <v-flex
            xs12
            sm8
            md6
          >
            <img src="~/assets/images/home/undraw-book-lover.svg">
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <img
      class="section__curve"
      src="~/assets/images/home/section-curve.svg"
    >

    <div class="section section--highlight pt-3">
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
            <img src="~/assets/images/home/undraw-savings.svg">
          </v-flex>

          <v-flex
            xs12
            sm8
            md6
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

    <div class="section section--highlight pt-3">
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
                Crie a sua campanha de estudos
              </h2>

              <e-card-text>
                Você escolhe o curso e a faculdade dos senhos,
                monta uma página contando o porque as pessoas devem te ajudar,
                e disponibiliza informações do seu desempenho para o público que te apoia.
              </e-card-text>
            </e-card>
          </v-flex>

          <v-flex
            sm12
            md4
          >
            <e-card class="section__card section__card--two">
              <img
                class="mt-1 mb-3"
                src="~/assets/images/home/create.svg"
              >

              <h2 class="headline mb-3">
                Compartilhe para familiares e amigos
              </h2>

              <e-card-text>
                Agora é divulgar a sua campanha para seus familiares e amigos,
                que podem contribuir mensalmente via cartão de crédito ou boleto bancário.
              </e-card-text>
            </e-card>
          </v-flex>

          <v-flex
            sm12
            md4
          >
            <e-card class="section__card section__card--three">
              <img
                class="mt-1 mb-3"
                src="~/assets/images/home/create.svg"
              >

              <h2 class="headline mb-3">
                As contribuições pagam sua mensalidade
              </h2>

              <e-card-text>
                Nós cuidamos do pagamento das contribuições, do investimendo delas em CDI para garantir um crescimento extra
                e o pagamento das suas mensalidades até o final do seu curso.
              </e-card-text>
            </e-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <img
      class="section__curve section__curve--rotate section__curve--spaced"
      src="~/assets/images/home/section-curve.svg"
    >

    <div class="section section--last mb-5 pb-5">
      <v-container grid-list-xl>
        <h1 class="display-4 mb-5">
          Pare de adiar os seus sonhos, comece agora a torná-lo real
        </h1>

        <e-button class="section__action">
          Iniciar minha campanha
        </e-button>
      </v-container>
    </div>
  </div>
</template>

<script>
import EButton from '~/components/ui/e-button'
import ECard from '~/components/ui/e-card'

export default {
  components: {
    EButton,
    ECard,
  },
  async fetch({ $axios }) {
    const result = await $axios.$get('/api/ping')
    console.log(result)
  },
}
</script>

<style lang="stylus" scoped>
.section--highlight {
  background-color: $color-light;
  box-shadow: -50rem 0 0 $color-light, 50rem 0 0 $color-light;
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
  height: 400px;
  margin-bottom: -220px;
  text-align: center;
  z-index: 2;
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
