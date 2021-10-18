<template>
  <v-app light>
    <v-app-bar
      color=white
      fixed
      app>
      <v-toolbar-title>
        <NuxtLink to='/'>
          <img src='/images/apollohealth-logo.svg' class='black-filter mx-3 mt-3' :height='logoHeight' alt='Apollo Saúde'/>
        </NuxtLink>
      </v-toolbar-title>

      <v-spacer />

      <v-btn color="primary" elevation='0' class='mx-3 text-uppercase' href='/home'>{{ words.login }}</v-btn>

    </v-app-bar>

    <v-main>
      <v-container class='router-container'>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app color='#121212' absolute class='pa-10 footer'>
      <v-col>
        <v-row class='mb-10'>
          <v-col class='mr-10 mb-10'>
            <div class='mb-6 white--text text-h6 font-weight-light'>{{ words.talkToUs }}</div>
            <div class='px-0 mb-1 text-h6'><a :href='links.whats' target="_blank">{{ words.whatsContact }}</a></div>
            <div class='px-0 mb-1 text-h6'><a :href='"mailto:"+links.email' target="_blank">{{ links.email }}</a></div>
          </v-col>
          <v-row justify='center' align='center'>
            <img src='/app-store-badge.svg' width='150' class='ma-3' alt='App Store' />
            <img src='/google-play-badge.png' width='190' class='ma-3' alt='Google Play' />
          </v-row>
        </v-row>
        <v-row>
          <img src='/images/apollohealth-logo.svg' class='white-filter mx-3' :height='logoHeight' alt='Apollo Saúde'/>
          <v-spacer />
          <div class='white--text ma-3 font-weight-light text-h7'>{{ words.copyright }}</div>
        </v-row>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      group: null,
      links: {
        whats: 'https://wa.me/551143958867?lang=pt_br&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Apollo Saúde%21',
        email: 'contato@apptime.com.br'
      },
      watch: {
        group () {
          this.drawer = false
        },
      },
      words: {
        projects: 'Projetos',
        disease: 'Fazer Diagnóstico',
        login: 'Entrar',
        contact: 'Contato',
        about: 'Sobre a Apollo',
        services: 'Serviços',
        products: 'Nossos produtos',
        apps: 'Aplicativos',
        websites: 'Websites',
        design: 'Design',
        logos: 'Logos',
        aboutUs: 'Sobre nós',
        talkToUs: 'Fale com a gente',
        whatsContact: '(11) 4395-8867',
        copyright: `© 2021 Apollo Saúde`
      },
    }
  },
  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.smAndDown
    },
    logoHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 25
        default: return 32
      }
    },
  },
}
</script>

<style lang='sass'>
.router-container
  min-height: 80vh
footer a
  color: white !important
footer a:hover
  color: #0FF !important
</style>
