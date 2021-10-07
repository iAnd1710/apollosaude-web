<template>
  <v-container>
    <v-col justify="center" align='center' class='my-16'>
      <img src='/static/images/apollohealth-icon.svg' :height='logoSize' alt='Apollo Health'/>
            <div :class='titleMargin'>
        <span :class="`primary--text font-weight-bold ${titleSize}`">Sobre nós.</span>
      </div>
      <div class='p-0 justify-content-center'>
          <h1 class="text-center">O grupo Apollo é composto pelos seguintes membros:
André, Guilherme, Gustavo, João, Leandro e Rodrigo. </h1>
          <h2 class="text-center">Este grupo foi criado para impactar o setor de saúde através do meio digital.
Nossa plataforma visa direcionar o paciente o mais rápido possível aos profissionais da saúde. 
Para isso você deve entrar em nosso site e dizer quais são os seus sintomas, a nossa IA irá conversar com você e 
transparecer uma lista de especialistas que pode ser consultada. Após ver a lista, você poderá realizar uma vídeochamada
com o médico escolhido e logo após agendar uma consulta com o mesmo.
Os resultados dos exames serão entregues em sua casa tal qual nossa mail box,
nela irão conter todos os remédios prescritos pelos médicos consultados.</h2>    
      </div>
      
    </v-col>
    <v-container class='my-16'></v-container>

  </v-container>
</template>

<script>
export default {
  computed: {
    logoSize () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 14
        case 'sm': return 17
        default: return 20
      }
    },
    titleSize () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'text-h4'
        case 'sm': return 'text-h3'
        default: return 'text-h2'
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
  max-width: 5px
.span
  display: inline-block
  line-height: 5px
</style>