<template>
  <v-app>
    <v-container>
      <v-container>
        <v-row justify='center' align='center'>
          <img src='/illustrations/medicine.svg' :width='imageSize' class='ma-16' alt='Technology' />
          <v-col justify='center' align='center' class='my-6'>
            <div class='title ma-5'>
              <div align='start' class='mt-0 mb-7'>
                <h1 class='text-h4 font-weight-bold'>{{ hello }},</h1>
                <p class='text-h5 mt-6 font-weight-bold'>Como está se sentindo hoje?</p>
              </div>
              <v-row align='center' class='mt-8 ml-1' justify='start'>
                <v-btn fab small elevation='0' color='primary' href='/prediction'>
                  <v-icon color='white'>mic</v-icon>
                </v-btn>
                <NuxtLink to='/prediction'><p class='text-h5 ml-4 mt-4 font-weight-bold'>Digite aqui</p></NuxtLink>
              </v-row>
            </div>
            <div :class='titleMargin'>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-container class='my-4'></v-container>
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
                <div class='text-h5 text--primary font-weight-bold'>
                  <v-icon size='26' color='black'>assessment</v-icon>
                  Status
                </div>
                <div class='ml-5 mt-2 text-subtitle-2 text--primary'>
                  <v-icon size='20' color='primary'>bluetooth</v-icon>
                  1 smartband conectada
                </div>
              </v-row>
              <div class='mt-2 text--primary font-weight-bold text-h6'>Muito bem. Continue para completar o objetivo diário.</div>
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

          <button-card icon='forum' title='Consultas' subtitle='Última consulta:'
                       content='Consulta com Dr. Gelol realizada no dia 08/10/2021' action-link='/consultations'
                       action-name='Todas as consultas'></button-card>

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
              <div class='text-h5 text--primary font-weight-bold'>
                <v-icon size='26' color='black'>credit_card</v-icon>
                Carteirinha
              </div>
              <img src='/images/carteirinha.svg' :height='isMobile ? "120px" : "150px"' class='mt-6' alt='Card' />
            </v-card-text>
            <v-card-actions>

            </v-card-actions>
          </v-card>
        </v-row>
      </v-container>
      <v-container class='my-16'></v-container>
    </v-container>
    <v-container class='my-16'></v-container>
    <v-container class='my-16'></v-container>
  </v-app>
</template>

<script>
export default {
  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.smAndDown
    },
    imageSize () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 300
        case 'sm': return 300
        default: return 400
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
