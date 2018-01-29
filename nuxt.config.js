
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'NuxtJs.id - NuxtJs Indonesia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.id - Web Portal Nuxt Indonesia' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700|Material+Icons' }
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
