<template>
  <v-app light>
    <v-app-bar
      color="rgba(255, 255, 255, 0.7)"
      :height='appBarHeight'
      :class="isMobile ? 'px-2' : 'px-10'"
      fixed
      app
    >
      <v-toolbar-title>
        <NuxtLink to='/'>
          <img src='/static/images/apollohealth-logo.svg' :class="`black-filter ${isMobile ? '' : 'mx-3'}`" :height='logoHeight' alt='Apollo Health'/>
        </NuxtLink>
      </v-toolbar-title>

      <v-spacer />

      <v-btn v-if='!isMobile' rounded color='white' elevation='0' class='mx-3 text-uppercase' href='/account/login'>{{ words.logIn }}</v-btn>

      <v-btn v-if='!isMobile' rounded color="rgba(102,61,239,0.2)" elevation='0' class='mx-3 text-uppercase' href='/prediction'>{{ words.disease }}</v-btn>

      <v-btn v-if='isMobile' color='primary' icon @click.stop="drawer = !drawer">
        <v-icon large>{{ drawer ? 'close' : 'drag_handle' }}</v-icon>
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      fixed
      clipped
      width='100%'
    >
      <v-list
        nav
        flat
        class='my-16 mx-3 pt-20'
      >
        <v-list-item-group
          v-model="group"
          active-class="primary--text"
        >
          <v-container class='my-10'></v-container>
          <v-list-item to='/account/sign-up'>
            <v-list-item-title class='text-h4 font-weight-bold'>{{ words.signUp }}</v-list-item-title>
          </v-list-item>

          <v-list-item to='/account/login'>
            <v-list-item-title class='text-h4 font-weight-bold'>{{ words.logIn }}</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class='router-container'>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app color='#121212' absolute class='pa-10 footer'>
      <v-col>

        <v-row>
          <img src='/static/images/apollohealth-logo.svg' class='white-filter mx-3' :height='logoHeight' alt='Apollo Health'/>
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
        whats: 'https://wa.me/551143958867?lang=pt_br&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Apollo Health%21',
        email: 'contato@apollohealth.app'
      },
      watch: {
        group () {
          this.drawer = false
        },
      },
      words: {
        projects: 'Projetos',
        disease: 'Fazer Diagnóstico',
        contact: 'Contato',
        logIn: 'Entrar',
        services: 'Serviços',
        products: 'Nossos produtos',
        apps: 'Aplicativos',
        websites: 'Websites',
        design: 'Design',
        logos: 'Logos',
        aboutUs: 'Sobre nós',
        talkToUs: 'Fale com a gente',
        whatsContact: '(11) 4395-8867',
        copyright: `© 2021 Apollo Health`
      },
    }
  },
  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.smAndDown
    },
    appBarHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 80
        default: return 120
      }
    },
    logoHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 35
        default: return 40
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
