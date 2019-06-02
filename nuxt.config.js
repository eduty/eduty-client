import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
  mode: 'spa',
  srcDir: 'src/',
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css',
      },
    ],
  },
  loading: { color: '#13274b' },
  css: [
    '~/assets/style/app.styl',
  ],
  plugins: [
    '@/plugins/vuetify',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  axios: {
    proxy: true,
  },
  proxy: {
    '/api': {
      target: 'https://eduty-server.herokuapp.com',
      pathRewrite: {
        '^/api': '',
      },
    },
  },
  router: {
    fallback: true,
    extendRoutes(routes, resolve) {
      routes.splice(0)

      routes.push({
        name: 'home',
        path: '/',
        component: resolve(__dirname, './src/pages/index.vue'),
      })

      routes.push({
        name: 'login',
        path: '/entrar',
        component: resolve(__dirname, './src/pages/auth/login.vue'),
      })

      routes.push({
        name: 'register',
        path: '/cadastro',
        component: resolve(__dirname, './src/pages/auth/register.vue'),
      })

      routes.push({
        path: '/campanha',
        component: resolve(__dirname, './src/pages/campaign/index.vue'),
        children: [
          {
            name: 'campaign',
            path: '',
            component: resolve(__dirname, './src/pages/campaign/step1.vue'),
          },
          {
            name: 'campaign-step2',
            path: 'sonho',
            component: resolve(__dirname, './src/pages/campaign/step2.vue'),
          },
          {
            name: 'campaign-step3',
            path: 'historia',
            component: resolve(__dirname, './src/pages/campaign/step3.vue'),
          },
          {
            name: 'campaign-success',
            path: 'sucesso',
            component: resolve(__dirname, './src/pages/campaign/success.vue'),
          },
        ],
      })

      routes.push({
        name: 'user',
        path: '/:userId',
        component: resolve(__dirname, './src/pages/user/index.vue'),
        children: [
          {
            name: 'user-profile',
            path: '',
            component: resolve(__dirname, './src/pages/user/profile.vue'),
          },
          {
            name: 'user-follow-up',
            path: 'acompanhamento',
            component: resolve(__dirname, './src/pages/user/profile.vue'),
          },
          {
            path: 'contribuir',
            component: resolve(__dirname, './src/pages/user/contribute/index.vue'),
            children: [
              {
                name: 'user-contribute',
                path: '',
                component: resolve(__dirname, './src/pages/user/contribute/step1.vue'),
              },
              {
                name: 'user-contribute-step2',
                path: 'valor',
                component: resolve(__dirname, './src/pages/user/contribute/step2.vue'),
              },
              {
                name: 'user-contribute-step3',
                path: 'dados',
                component: resolve(__dirname, './src/pages/user/contribute/step3.vue'),
              },
              {
                name: 'user-contribute-success',
                path: 'sucesso',
                component: resolve(__dirname, './src/pages/user/contribute/success.vue'),
              },
            ],
          },
        ],
      })
    },
  },
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl'],
      },
    },
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
