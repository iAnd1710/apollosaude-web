<template>
<v-app>
  <v-container>
    <v-container style='background-image: linear-gradient(#0a00ff, #ff00e2)'>
      <v-col justify="center" align='center' class='my-6'>
        <div class='title ma-5'>
          <div align='start' class='mt-0 mb-7'>
            <h1 class='text-h4 font-weight-bold white--text'>{{hello}},</h1>
            <p class='text-h5 mt-6 font-weight-bold white--text'>Como está se sentindo hoje?</p>
          </div>
          <v-row align='center' class='mt-8' justify='start'>
            <v-btn fab small elevation='0' color='white' href='/prediction'>
              <v-icon color='black'>mic</v-icon>
            </v-btn>
            <a href='/prediction'><p class='text-h5 ml-4 mt-4 font-weight-bold white--text'>Digite aqui</p></a>
          </v-row>
        </div>
        <div :class='titleMargin'>
        </div>
      </v-col>
    </v-container>
    <v-container class='my-4'></v-container>
    <v-container>
      <v-row
        justify="space-around">
        <v-card
          color="white"
          elevation="12"
          rounded="lg"
          width="21%"
        >
          <v-card-text>
            <div class="text-h5 text--primary font-weight-bold"><v-icon size="26" color="black">article</v-icon> Exames </div>
            <div class="mt-2 text--primary font-weight-bold">1 novo resultado disponível</div>
            <div class="mt-2 text-subtitle-2 text--primary"><v-icon size="12" color=rgba(0,32,245,255)>circle</v-icon>  Exame de sangue realizado no dia 11/10/2021 </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              href="/exames"
              text
              color="deep-purple accent-4"
            >Todos os exames
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card
          color="white"
          elevation="12"
          rounded="lg"
          width="21%"
        >
          <v-card-text>
            <div class="text-h5 text--primary font-weight-bold"><v-icon size="26" color="black">forum</v-icon> Consultas </div>
            <div class="mt-2 text--primary font-weight-bold">Última consulta:</div>
            <div class="mt-2 text-subtitle-2 text--primary"><v-icon size="12" color=rgba(0,32,245,255)>circle</v-icon>  Consulta com Dr. Gelol realizada no dia 08/10/2021 </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              href="/consulta"
              color="deep-purple accent-4"
            >Todas as consultas
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card
          color="white"
          elevation="12"
          rounded="lg"
          width="21%"
        >
          <v-card-text>
            <div class="text-h5 text--primary font-weight-bold"><v-icon size="26" color="black">today</v-icon> Agenda </div>
            <div class="mt-2 text--primary font-weight-bold">Eventos de hoje:</div>
            <div class="mt-2 text-subtitle-2 text--primary"><v-icon size="12" color=rgba(0,32,245,255)>circle</v-icon> 19:00 - Injeção de Urânio Enriquecido  </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              class="mb-0 pb-0"
              href="/agenda"
              text
              color="deep-purple accent-4"
            >Agenda completa
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-card
          color="white"
          elevation="12"
          rounded="lg"
          width="21%"
        >
          <v-card-text>
            <div class="text-h5 text--primary font-weight-bold"><v-icon size="26" color="black">receipt</v-icon> Receitas </div>
            <div class="mt-2 text--primary font-weight-bold">1 receita em curso:</div>
            <div class="mt-2 text-subtitle-2 text--primary"><v-icon size="12" color=rgba(0,32,245,255)>circle</v-icon> Receita por Dr. Luciano Rigoni Calleri no dia 01/10/2021  </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              class="mb-0 pb-0"
              href="/receitas"
              text
              color="deep-purple accent-4"
            >Todas as Receitas
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
      <v-row justify="center">
        <v-card
          color="white"
          elevation="12"
          rounded="lg"
          width="42%"
          class="mt-13"
        >
          <v-card-text>
            <div class="text-h5 text--primary font-weight-bold"><v-icon size="26" color="black">credit_card</v-icon> Carteirinha </div>
            <img src='/images/carteirinha.svg' height='220' width='100%' class='mt-6' alt='Card' />
          </v-card-text>
          <v-card-actions>

          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
    <v-container class='my-16'></v-container>
  </v-container>
</v-app>
</template>

<script>
export default {
  computed: {
    hello () {
      const current = new Date();
      if (current.getHours() > 17 || current.getHours() < 5) {
        return 'Boa noite'
      } else {
        return 'Bom dia'
      }
    },
    logoSize () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 60
        case 'sm': return 70
        default: return 120
      }
    },
    titleSize () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'text-h4'
        case 'sm': return 'text-h3'
        default: return 'text-h3'
      }
    },
    titleMargin () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'mt-2'
        case 'sm': return 'mt-4'
        default: return 'mt-6'
      }
    },
  },
}
</script>

<style lang='sass'>
.title
  max-width: 500px
.span
  display: inline-block
  line-height: 12px
</style>
