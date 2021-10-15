<template>
<v-app style="background-color:rgba(0, 0, 0, 0);">
  <v-container>
    <v-col justify="center" align='center' class='my-16'>
      <Icon class="filter-black" :height=logoSize />
      <div class='title ma-5'>
        <div :class="`font-weight-bold white--text ${titleSize}`">Aqui você não morre</div>
      </div>
      <div :class='titleMargin'>
      </div>
    </v-col>
    <v-container class='my-16'></v-container>
    <v-container>
      <v-row
        justify="space-around">
        <v-card
          color="rgba(255,255,255,0.7)"
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
          color="rgba(255,255,255,0.7)"
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
          color="rgba(255,255,255,0.7)"
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
          color="rgba(255,255,255,0.7)"
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
          color="rgba(255,255,255,0.7)"
          elevation="12"
          rounded="lg"
          width="42%"
          class="mt-13"
        >
          <v-card-text>
            <div class="text-h5 text--primary font-weight-bold"><v-icon size="26" color="black">credit_card</v-icon> Carteirinha </div>
            <Icon2 class="mt-6"  style="height:220; width:100%" />            
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
import Icon from '/static/images/apollohealth-logo.svg'
import Icon2 from '/static/images/carteirinha.svg'
export default {
  data: function(){
    return{
    }
  },
  components:{
    Icon,
    Icon2
  },
  computed: {
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
.v-main 
  background: linear-gradient(to right, #663DEF, #E34BE2)
.title
  max-width: 500px
.span
  display: inline-block
  line-height: 12px
.filter-black
  filter: invert(100%)
</style>
