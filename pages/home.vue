<template>
  <v-app>
    <v-container>
      <v-container class='my-6'>
        <v-row justify='center' align='center'>
          <img src='/illustrations/medicine.svg' :width='imageSize' class='mx-16' alt='Technology' />
          <v-col justify='center' align='center' class='my-6'>
            <div class='title ma-5'>
              <div align='start' class='mt-0 mb-7'>
                <h1 class='text-h4 font-weight-bold'>{{ hello }},</h1>
                <p class='text-h5 mt-6 font-weight-bold'>Como está se sentindo hoje?</p>
              </div>
              <v-row align='center' class='mt-8 ml-1' justify='start'>
                <v-btn fab small elevation='0' color='primary' href='/assistant'>
                  <v-icon color='white'>mic</v-icon>
                </v-btn>
                <NuxtLink to='/assistant'><p class='text-h5 ml-4 mt-4 font-weight-bold'>Digite aqui</p></NuxtLink>
              </v-row>
            </div>
            <div :class='titleMargin'>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-container class='my-3'></v-container>
      <v-container>
        <v-row
          justify='center'>

          <v-card
            outlined
            class='pa-2 ma-3 box'
            width='500px' :height='isMobile ? "" : "250px"'
          >
            <v-card-text>
              <v-row class='ma-1'>
                <v-row align='center'>
                  <v-icon size='26' color='black' class='ml-2'>assessment</v-icon>
                  <p class='text-h5 text--primary font-weight-bold ml-1 mt-4'>Status</p>
                </v-row>
                <div class='ml-5 mt-2 text-subtitle-2 text--primary'>
                  <v-icon size='20' color='primary'>bluetooth</v-icon>
                  1 smartband conectada
                </div>
              </v-row>
              <div class='mt-2 text--primary font-weight-bold text-h6'>Muito bem. Continue para completar o objetivo
                diário.
              </div>
              <div class='mt-2 text-subtitle-2 text--primary'>
                <v-icon size='20' color='primary'>directions_run</v-icon>
                3456 / 6000 passos diários
              </div>
              <div class='mt-2 text-subtitle-2 text--primary'>
                <v-icon size='20' color='primary'>favorite</v-icon>
                73 bpm há 1 hora
              </div>
              <div class='mt-2 text-subtitle-2 text--primary'>
                <v-icon size='20' color='primary'>hotel</v-icon>
                (01:22 - 08:01) Como foi o seu sono?
              </div>
            </v-card-text>
            <v-card-actions>

            </v-card-actions>
          </v-card>

          <button-card icon='article' title='Exames' subtitle='1 novo resultado disponível'
                       content='Exame de sangue realizado no dia 11/10/2021' action-link='/exams'
                       action-name='Todos os exames'></button-card>

          <button-card icon='forum' title='Atendimento' subtitle='Dr. Gustavo'
                       content='Sem problemas. Se sentir algo a mais, basta voltar ao chat.'
                       action-link='/consultations'
                       action-name='Ver mensagens'></button-card>

          <button-card icon='today' title='Agenda' subtitle='Eventos de hoje:'
                       content='19:00 - Injeção de Urânio Enriquecido' action-link='/calendar'
                       action-name='Agenda completa'></button-card>

          <button-card icon='receipt' title='Receitas' subtitle='1 receita em curso:'
                       content='Receita por Dr. Luciano Rigoni Calleri no dia 01/10/2021' action-link='/prescriptions'
                       action-name='Todas as Receitas'></button-card>

          <v-card
            outlined
            class='pa-2 ma-3 box'
            width='500px' height='250px'
          >
            <v-card-text>
              <v-row align='center'>
                <v-icon size='26' color='black' class='ml-2'>credit_card</v-icon>
                <p class='text-h5 text--primary font-weight-bold ml-1 mt-4'>Carteirinha</p>
              </v-row>
              <img src='/images/carteirinha.svg' :height='isMobile ? "136px" : "150px"' class='mt-3' alt='Card' />
            </v-card-text>
            <v-card-actions>

            </v-card-actions>
          </v-card>

          <v-card
            outlined
            class='pa-2 ma-3 box'
            width='500px' height='250px'
          >
            <v-card-text>
              <v-row align='center' class='mb-1'>
                <v-icon size='26' color='black' class='ml-2'>location_on</v-icon>
                <p class='text-h5 text--primary font-weight-bold ml-1 mt-4'>Locais próximos</p>
              </v-row>
              <NuxtLink to='/maps'><img src='/maps/drug-store.png' width='100%' height='150px' alt='Mapa'
                                        style='border-radius: 20px; object-fit: cover;' /></NuxtLink>
            </v-card-text>
            <v-card-actions>

            </v-card-actions>
          </v-card>

          <v-card
            outlined
            class='pa-2 ma-3 box'
            :width='isMobile ? "100%" : "240px"' height='250px'
          >
            <v-card-text>
              <v-row align='center'>
                <v-icon size='26' color='black' class='ml-2'>medical_services</v-icon>
                <p class='text-h5 text--primary font-weight-bold ml-1 mt-4'>Kits Apollo</p>
              </v-row>
              <v-row align='center' justify='center'>
                <img src='/kits/caixa-de-envio.jpeg' width='100%' height='110px' alt='Kits'
                     style='border-radius: 20px; object-fit: cover;' />
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn
                href='/kits'
                text
                color='primary'
              >
                Todos os Kits
              </v-btn>
            </v-card-actions>
          </v-card>

          <v-card
            outlined
            class='pa-2 ma-3 box'
            :width='isMobile ? "100%" : "240px"' height='250px'
          >
            <v-card-text>
              <v-row align='center'>
                <v-icon size='26' color='black' class='ml-2'>shopping_basket</v-icon>
                <p class='text-h5 text--primary font-weight-bold ml-1 mt-4'>Farmácias</p>
              </v-row>
              <v-row align='center' justify='center'>
                <img src='/kits/caixa-de-pilulas.jpeg' width='100%' height='110px' alt='Kits'
                     style='border-radius: 20px; object-fit: cover;' />
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn
                href='/kits'
                text
                color='primary'
              >
                Comprar online
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-row>
      </v-container>
      <v-container class='my-16'></v-container>
      <v-col class='my-16' justify='center' align='center'>
        <v-row justify='center' align='center'>
          <v-col>
            <h1 class='text-h4 font-weight-bold'>Para todo lugar no seu bolso.</h1>
            <img src='/images/apollohealth-app.png' :width='appSize' alt='App' loading='lazy/'>
            <v-row justify='center' align='center'>
              <a target='_blank' href='https://xd.adobe.com/view/2ceac62a-dfba-4cf9-a7cc-2cd84867350b-79b9/?fullscreen'><img
                src='/app-store-badge.svg' width='150' class='ma-3' alt='App Store' /></a>
              <a target='_blank' href='https://xd.adobe.com/view/2ceac62a-dfba-4cf9-a7cc-2cd84867350b-79b9/?fullscreen'><img
                src='/google-play-badge.png' width='190' class='ma-3' alt='Google Play' /></a>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
    <v-container class='my-16'></v-container>
    <v-container class='my-16'></v-container>
  </v-app>
</template>

<script>
export default {
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    },
    imageSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 300
        case 'sm':
          return 300
        default:
          return 400
      }
    },
    appSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 300
        case 'sm':
          return 300
        default:
          return 700
      }
    },
    hello() {
      const current = new Date()
      if (current.getHours() < 18 && current.getHours() > 12) {
        return 'Boa tarde'
      } else if (current.getHours() > 17 || current.getHours() < 4) {
        return 'Boa noite'
      } else {
        return 'Bom dia'
      }
    },
    logoSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 60
        case 'sm':
          return 70
        default:
          return 120
      }
    },
    titleSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'text-h4'
        case 'sm':
          return 'text-h3'
        default:
          return 'text-h3'
      }
    },
    titleMargin() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'mt-2'
        case 'sm':
          return 'mt-4'
        default:
          return 'mt-6'
      }
    }
  }
}
</script>

<style lang='sass'>
.title
  max-width: 500px

.span
  display: inline-block
  line-height: 12px
</style>
