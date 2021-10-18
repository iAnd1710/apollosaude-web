<template>
  <v-app>
    <v-container>
      <v-col justify='center' align='center' class='mb-10'>
        <v-row justify='center' align='center'>
          <v-col align='start'>
            <div align='start' class='mt-0 mb-7 mx-4'>
              <h1 class='text-h4 font-weight-bold'>Saúde inteligente e</h1>
              <h1 class='text-h4 font-weight-bold'>sem sair de casa.</h1>
              <p class='text-h5 mt-6'>Com o nosso sistema de inteligência artificial, tenha tudo o que você precisa em
                uma única plataforma.</p>
            </div>
            <v-btn x-large color='primary' elevation='0' class='mx-3 text-uppercase' href='/home'>Comece agora</v-btn>
          </v-col>
          <img src='/illustrations/medicine.svg' :width='imageSize' class='ma-16' alt='Technology' />
        </v-row>
        <v-divider class='mt-10'></v-divider>
        <v-row justify='center' align='center'>
          <img src='/illustrations/robot.svg' :width='imageSize' class='ma-16' alt='Technology' />
          <v-col align='start'>
            <div align='start' class='mt-0 mb-7 mx-4'>
              <h1 class='text-h4 font-weight-bold'>Médico virtual com inteligência artificial.</h1>
              <p class='text-h5 mt-6'>Chatbot para te atender 24 horas por dia, de forma simples e rápida.</p>
            </div>
          </v-col>
        </v-row>
        <v-divider class='mt-10'></v-divider>
        <v-row justify='center' align='center' class='mt-12 mb-8'>
          <h1 class='text-h4 font-weight-bold'>Tudo em um só lugar.</h1>
        </v-row>
        <v-row justify='center' align='center'>
          <info-card icon='support_agent' title='Assistente virtual'></info-card>
          <info-card icon='delivery_dining' title='Entregas à domicílio'></info-card>
          <info-card icon='remember_me' title='Atendimento à distância'></info-card>
          <info-card icon='description' title='Prescrições médicas'></info-card>
          <info-card icon='medication' title='Kits personalizados'></info-card>
          <info-card icon='explore' title='Locais mais próximos'></info-card>
        </v-row>
        <v-divider class='mt-10'></v-divider>
      </v-col>
      <v-col justify='center' align='center' class='my-10'>
        <v-row justify='center' align='center'>
          <v-col>
            <h1 class='text-h4 font-weight-bold'>Para todo lugar no seu bolso.</h1>
            <img src='/images/apollo-app.png' :width='appSize' alt='App' loading='lazy/'>
            <v-row justify='center' align='center'>
              <img src='/app-store-badge.svg' width='150' class='ma-3' alt='App Store' />
              <img src='/google-play-badge.png' width='190' class='ma-3' alt='Google Play' />
            </v-row>
          </v-col>
        </v-row>
        <v-divider class='mt-10'></v-divider>
        <v-row justify='center' align='center' class='mt-10'>
          <img src='/illustrations/doctors.svg' :width='imageSize' class='ma-16' alt='Technology' />
          <v-col>
            <div align='start' class='mt-0'>
              <h1 class='text-h4 font-weight-bold'>O futuro é agora</h1>
              <p class='text-h6 mt-6'>{{ texts.ourMission }}</p>
            </div>
          </v-col>
        </v-row>
        <v-divider class='mt-10'></v-divider>
        <v-row>
          <img v-if='!isMobile' src='/images/apollohealth-icon.svg' width='150' class='ma-6' alt='Logo' />
          <v-col>
            <div align='start' class='mt-10'>
              <img v-if='isMobile' src='/images/apollohealth-icon.svg' width='100' class='ma-6' alt='Logo' />
              <h1 class='text-h4 font-weight-bold'>A equipe Apollo</h1>
              <h3 class='text-h6 mt-6'>{{ texts.begin }}</h3>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-row justify='center' align='center'>
        <user-card :image='andreImage' name='André Lima' bio='Full Stack Developer'
                   link='https://www.linkedin.com/in/andre-lima-inacio'></user-card>
        <user-card image='https://cdn.vuetifyjs.com/images/profiles/marcus.jpg' name='Guilherme de Paula'
                   bio='Front-End Developer' link='https://www.linkedin.com/school/fiap'></user-card>
        <user-card :image='gustavoImage' name='Gustavo Santos' bio='Full Stack Developer'
                   link='https://www.linkedin.com/in/gustavomaedo'></user-card>
        <user-card :image='joaoImage' name='João Martins' bio='Product Manager'
                   link='https://www.linkedin.com/in/joaovictorms/'></user-card>
        <user-card :image='leandroImage' name='Leandro Lima' bio='Graphic Designer'
                   link='https://www.linkedin.com/in/leandrolimaeng'></user-card>
        <user-card :image='rodrigoImage' name='Rodrigo Tawata' bio='Front-End Developer'
                   link='https://www.linkedin.com/in/rodrigo-tawata-3777a9195'></user-card>
      </v-row>
      <v-container class='my-16'></v-container>
      <v-container class='my-16'></v-container>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      andreImage: require('@/static/images/team/andre.jpg'),
      gustavoImage: require('@/static/images/team/gustavo.jpg'),
      joaoImage: require('@/static/images/team/joao.jpg'),
      leandroImage: require('@/static/images/team/leandro.jpg'),
      rodrigoImage: require('@/static/images/team/rodrigo.jpg'),
      texts: {
        begin: 'O apollo saúde é um projeto que foi iniciado após um desafio proposto pela Roche para os alunos do 3º ano de Engenharia Mecatrônica da FIAP, e o desafio é digitalizar o setor da saúde, impactá-lo através do meio digital e virtualizar o atendimento médico.',
        ourMission: 'Nossa missão é direcionar o paciente o mais rápido possível aos profissionais da saúde, bastando apenas entrar em nossa plataforma e fazer um pré diagnóstico com nosso modelo baseado em Inteligência Artificial, assim o paciente será redirecionado para um médico especialista. Após isso, o paciente pode conversar com este médico e marcar uma videochamada ou até mesmo uma consulta, e se precisar, marcar exames com os nossos laboratórios parceiros. Os resultados e receitas são todos digitais, e o paciente poderá receber a nossa mail box contendo todos os remédios prescritos pelos seus médicos.'
      }
    }
  },
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
    appSize () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 300
        case 'sm': return 300
        default: return 700
      }
    },
  }
}
</script>

<style lang='sass'>
.title
  max-width: 5px

.span
  display: inline-block
  line-height: 5px
</style>
