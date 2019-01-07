require('dotenv').config()
const client = require('./plugins/contentful')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Todor Licheff',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Todor Licheff personal portfolio'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Merriweather|Poppins:400,600'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
          // loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~/plugins/contentful'],
  modules: ['@nuxtjs/dotenv', '@nuxtjs/markdownit'],
  markdownit: {
    injected: true
  },
  generate: {
    routes () {
      return client.getEntries({ content_type: 'post' }).then(entries => {
        return entries.items.map(entry => {
          return {
            route: entry.fields.slug,
            payload: entry
          }
        })
      })
    }
  }
}
