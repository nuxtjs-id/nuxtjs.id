
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'id'
    },
    title: 'NuxtJs.id - Komunitas NuxtJs Indonesia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'keywords', name: 'keywords', content: 'nuxtjs,nuxtjs indonesia,nuxtjs.id,nuxtjs community indonesia,komunitas nuxtjs indonesia,indonesia,javascript' },
      { hid: 'description', name: 'description', content: 'Nuxt.id - Komunitas NuxtJs Indonesia' },
      { name: 'orientation', content: 'potrait' },
      { name: 'theme-color', content: '#fafafa' },
      { name: 'msapplication-tap-highlight', content: 'no' },
      { name: 'msapplication-TileColor', content: '#fafafa' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'msapplication-TileImage', content: '/img/icons/nuxt-indonesia-96.png' },
      { property: 'og:title', content: 'NuxtJs.id - Komunitas NuxtJs Indonesia' },
      { property: 'og:site_name', content: 'NuxtJs.id' },
      { property: 'og:description', content: 'NuxtJs.id - Web Portal Komunitas NuxtJs Indonesia' },
      { property: 'og:image', content: '/img/icons/nuxt-indonesia-512.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/manifest.json' }
    ]
  },

  /**
   * Import Plugin
   */
  plugins: ['~/plugins/vuetify.js', {src: '~/plugins/algoliasearch.js'}],

  /**
   * Import CSS
   */
  css: [
    '~/assets/style/app.styl',
    '~/assets/style/style.css'
  ],

  /**
   * Loading Component
   */
  loading: '~/components/loading.vue',

  /**
   * Build configuration
   */
  build: {
    vendor: [],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

        const vueLoader = config.module.rules.find(
          ({loader}) => loader === 'vue-loader')
        const { options: {loaders} } = vueLoader || { options: {} }
        if (loaders) {
          for (const loader of Object.values(loaders)) {
            changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
          }
        }
        config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
        // console.log(util.inspect(config.module.rules, { depth: 6 }))
      }
    }
  }
}

function changeLoaderOptions (loaders) {
  if (loaders) {
    for (const loader of loaders) {
      if (loader.loader === 'sass-loader') {
        Object.assign(loader.options, {
          includePaths: ['./assets']
        })
      }
    }
  }
}
