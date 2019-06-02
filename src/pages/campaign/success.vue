<template>
  <v-container grid-list-xl>
    <v-layout
      class="my-5"
      row
      wrap
      justify-space-between
    >
      <v-flex md5>
        <h2 class="display-4 mt-1 mb-4">
          Campanha criada com sucesso
        </h2>

        <p class="body-2">
          Tudo pronto! Agora basta divulgar, utilize o link abaixo e
          compartilhe com seus familiares, amigos e em suas redes socias
        </p>

        <v-text-field
          label="Link da sua campanha"
          value="http://eduty.me/heitormiranda"
          disabled
        />

        <div class="mt-4 mb-4">
          <strong class="step__text">
            Compartilhe em suas redes sociais
          </strong>
        </div>

        <div class="mb-4">
          <v-icon x-large class="step__icon mr-2">
            fab fa-facebook
          </v-icon>

          <v-icon x-large class="step__icon mr-2">
            fab fa-linkedin
          </v-icon>

          <v-icon x-large class="step__icon">
            fab fa-twitter
          </v-icon>
        </div>

        <e-button to="/">
          Voltar para home
        </e-button>
      </v-flex>

      <v-flex md6>
        <img src="~/assets/images/campaign/undraw-order-confirmed.svg">
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

.step__icon {
  color: $color-primary;
  cursor: pointer;
}

.step__action {
  width: 270px;
}
</style>
