<template>
  <v-footer
    dark
    height="auto"
    class="footer"
  >
    <v-container class="footer__wrapper">
      <div class="litte-thing__container">
        <div class="litte-thing" />
        <div class="litte-thing litte-thing--secondary" />
      </div>
      <v-layout class="footer__row">
        <v-flex md2>
          <img
            alt="Eduty"
            title="Eduty"
            src="~/assets/images/logo-siluet.svg"
            class="footer__logo"
          >

          <a class="footer__link" href="mailto:help@eduty.me">help@eduty.me</a>
        </v-flex>
        <v-flex md2 offset-md2>
          <p class="footer__list-title">
            AJUDA
          </p>
          <ul class="footer__list">
            <li class="footer__list-item">
              <a class="footer__link" href="#">Central de ajuda</a>
            </li>
            <li class="footer__list-item">
              <a class="footer__link" href="#">Perguntas frequentes</a>
            </li>
            <li class="footer__list-item">
              <a class="footer__link" href="#">Termos de uso</a>
            </li>
          </ul>
        </v-flex>
        <v-flex md2 offset-md1>
          <p class="footer__list-title">
            SOBRE
          </p>
          <ul class="footer__list">
            <li class="footer__list-item">
              <a class="footer__link" href="#">Quem somos</a>
            </li>
            <li class="footer__list-item">
              <a class="footer__link" href="#">Trabalhe conosco</a>
            </li>
          </ul>
        </v-flex>
        <v-flex md3>
          <v-layout justify-end>
            <a
              v-for="icon in icons"
              :key="icon"
              class="footer__link footer__link--icon"
            >
              <v-icon x-large class="footer__icon">
                {{ icon }}
              </v-icon>
            </a>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-divider class="footer__divider" />
    <v-container text-xs-center>
      eduty 2019 © made with love by Code in Quero winners
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-instagram',
      'fab fa-linkedin',
      'fab fa-twitter',
    ],
  }),
}
</script>

<style src="./the-footer.styl" lang="stylus" scoped />
