import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

Vue.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
library.add(fas, fab) // Include needed icons.

Vue.use(Vuetify, {
  iconfont: 'faSvg',
  theme: {
    primary: '#1C2D4D',
    secondary: '#46546E',
    accent: '#2691FD',
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3,
  },
})
