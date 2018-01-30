
module.exports = {
  /*
  ** Headers of the page
  */
  htmlAttrs: {
    lang: 'id'
  },
  head: {
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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700|Material+Icons' },
      { rel: 'manifest', href: '/manifest.json' }
    ]
  },
  plugins: ['~/plugins/vuetify.js', {src: '~/plugins/algoliasearch.js'}],
  css: [
    '~/assets/style/app.styl',
    '~/assets/style/style.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: '~/components/loading.vue',
  /*
  ** Build configuration
  */
  build: {
    vendor: [],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
