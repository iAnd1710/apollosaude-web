import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%sApollo Health: compartilhe a sua história',
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:title', name: 'og:title', property: 'og:title', content: 'Apollo Health: compartilhe a sua história' },
      { hid: 'description', name: 'description', content: 'Seus melhores flashes e memórias ainda mais inesquecíveis com a Apollo Health!' },
      { hid: 'og:description', name: 'og:description', property: 'og:description', content: 'Seus melhores flashes e memórias ainda mais inesquecíveis com a Apollo Health!' },
      { hid: 'keywords', name: 'keywords', content: 'Apollo Health, Social, Network, Media, Post, Chat' },
      { hid: 'author', name: 'author', content: 'Apollo Health Social Network Ltda.' },
      { hid: 'copyright', name: 'copyright', content: '© Apollo Health Social Network Ltda.' },
      { hid: 'og:image', name: 'og:image', property: 'og:image', content: 'https://apollohealth.app/images/apollohealth-square-150.png' },
      { hid: 'og:url', name: 'og:url', property: 'og:url', content: 'https://apollohealth.app/' },
      { hid: 'og:type', name: 'og:type', property: 'og:type', content: 'company' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#FF0000' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'shortcut icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'shortcut icon', type: 'image/png', href: '/icons/icon-96x96.png', sizes: '96x96' },
      { rel: 'apple-touch-icon', type: 'image/png', href: '/icons/icon-192x192.png', sizes: '192x192' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://127.0.0.1:5000',
    timeout: 1000
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: 'Apollo Saúde: compartilhe a sua história',
      description: 'Seus melhores flashes e memórias ainda mais inesquecíveis com a Apollo Health!',
      author: 'Apollo Health Social Network Ltda.',
      ogTitle: 'Apollo Health: compartilhe a sua história',
      ogDescription: 'Seus melhores flashes e memórias ainda mais inesquecíveis com a Apollo Health!',
      ogUrl: 'https://apollohealth.app/',
      ogImage: 'https://apollohealth.app/images/apollohealth-square-150.png',
      image: 'https://apollohealth.app/images/apollohealth-square-150.png',
      ogType: 'company',
      theme_color: '#FF0000',
      background_color:'#FFFFFF',
    },
    manifest: {
      name: 'Apollo Health - Apps e Sites',
      short_name: 'Apollo Health',
      lang: 'br',
      icons:[
        {
          src:`/icons/icon-72x72.png`,
          size:"72x72",
          type:"image/png"
        },
        {
          src:`/icons/icon-96x96.png`,
          size:"96x96",
          type:"image/png"
        },
        {
          src:`/icons/icon-128x128.png`,
          size:"128x128",
          type:"image/png"
        },
        {
          src:`/icons/icon-144x144.png`,
          size:"144x144",
          type:"image/png"
        },
        {
          src:`/icons/icon-152x152.png`,
          size:"152x152",
          type:"image/png"
        },
        {
          src:`/icons/icon-192x192.png`,
          size:"192x192",
          type:"image/png"
        },
        {
          src:`/icons/icon-384x384.png`,
          size:"384x384",
          type:"image/png"
        },
        {
          src:`/icons/icon-512x512.png`,
          size:"512x512",
          type:"image/png"
        }
      ]
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    options: {
      customProperties: true
    },
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: {
        family: 'Montserrat'
      },
      icons: 'md'
    },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#FF0012',
          accent: '#FF00F0',
          secondary: colors.pink,
          info: colors.blue.accent3,
          warning: colors.amber.accent3,
          error: colors.red.accent2,
          success: colors.teal.accent2
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: (config) => {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: [
          'babel-loader',
          'vue-svg-loader',
        ]
      })
    }
  }
}
