<template>
  <v-footer
    height="auto"
    class="footer"
  >
    <v-container>
      <v-layout>
        <v-flex md5>
          logo
        </v-flex>
        <v-flex md5>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3 white--text"
            icon
            large
          >
            <v-icon x-large>
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
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

<style src="./footer.styl" lang="stylus" scoped />
