
module.exports = {
  modules: [
    '@nuxtjs/axios',
    '@bazzite/nuxt-optimized-images'
  ],
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true,
    inlineImageLimit: -1,
  },


  /*
  ** Headers of the page
  */
  head: {
    title: 'Hari\'s Website',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: 'Hari\'s Personal Website!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/fonts.css'},
      { rel: 'stylesheet', type: 'text/css', href: '/nanogallery2.min.css'}
      ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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
