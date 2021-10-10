<template>
  <v-app style="background-color: rgba(0, 0, 0, 0)">
    <v-container>
      <v-col justify="center" align='center' class='my-10'>
        <div :class='titleMargin'>
        </div>
        <div align="start" class='white--text mt-0'>
          <h1 class="text-center text-h4 font-weight-bold"> Como surgimos </h1>
          <h3 class="text-center text-h6 mt-3">{{ texts.begin }}</h3>
        </div>
        <v-divider class="mt-10"></v-divider>
        <div class="white--text mt-10 p-0">
          <h1 class="text-h4 font-weight-bold"> Nossa missão </h1>
          <p class="text-center text-h6 mt-3">{{ texts.ourMission }}</p>
        </div>
      </v-col>
      <v-container class='my-16'></v-container>
      
      <v-row justify="space-between">
      <v-card
        elevation="24"
        rounded="lg"
        max-width="434"
        color="rgba(255,255,255,0.5)">
        <v-img
          height="100%"
          class="pb-3">
          <v-row>
            <v-col
              align-self="start"
              class="pa-0"
              cols="12">
              <v-avatar
                class="profile"
                size="116">
                <v-img :src="andreImage"></v-img>
              </v-avatar>
            </v-col>
            <v-col class="py-0">
              <v-list-item dark>
                <v-list-item-content>
                  <v-list-item-title class="text-h6">André Lima Inácio</v-list-item-title>
                  <v-list-item-subtitle>Full Stack Developer</v-list-item-subtitle>
                </v-list-item-content>
                <v-btn 
                  color="rgba(0, 0, 0, 0.5)"
                  min-width="0"
                  width="46px"
                  height="46px"
                  class="justify-center mt-0"
                  href="https://www.linkedin.com/in/andre-lima-inacio/">
                  <linkedinIcon class="filter-white" height="28px"></linkedinIcon>
                </v-btn>
              </v-list-item>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
      <v-card
        elevation="24"
        rounded="lg"
        max-width="434"
        color="rgba(255,255,255,0.5)">
        <v-img
          height="100%"
          class="pb-3">
          <v-row>
            <v-col
              align-self="start"
              class="pa-0"
              cols="12">
              <v-avatar
                class="profile"
                size="116">
                <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
              </v-avatar>
            </v-col>
            <v-col class="py-0">
              <v-list-item dark>
                <v-list-item-content>
                  <v-list-item-title class="text-h6">Guilherme de Paula Soares</v-list-item-title>
                  <v-list-item-subtitle>Front-End Developer</v-list-item-subtitle>
                </v-list-item-content>
                <v-btn 
                  color="rgba(0, 0, 0, 0.5)"
                  min-width="0"
                  width="46px"
                  height="46px"
                  class="justify-center mt-0"
                  href="">
                  <linkedinIcon class="filter-white" height="28px"></linkedinIcon>
                </v-btn>
              </v-list-item>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
      <v-card
        class="mt-6"
        elevation="24"
        rounded="lg"
        max-width="434"
        color="rgba(255,255,255,0.5)">
        <v-img
          height="100%"
          class="pb-3">
          <v-row>
            <v-col
              align-self="start"
              class="pa-0"
              cols="12">
              <v-avatar
                class="profile"
                size="116">
                <v-img :src="gustavoImage"></v-img>
              </v-avatar>
            </v-col>
            <v-col class="py-0">
              <v-list-item dark>
                <v-list-item-content>
                  <v-list-item-title class="text-h6">Gustavo Maedo Santos</v-list-item-title>
                  <v-list-item-subtitle>Full Stack Developer</v-list-item-subtitle>
                </v-list-item-content>
                <v-btn 
                  color="rgba(0, 0, 0, 0.5)"
                  min-width="0"
                  width="46px"
                  height="46px"
                  class="justify-center mt-0"
                  href="https://www.linkedin.com/in/gustavomaedo">
                  <linkedinIcon class="filter-white" height="28px"></linkedinIcon>
                </v-btn>
              </v-list-item>
            </v-col>
          </v-row>
        </v-img>
      </v-card>

      <v-card
        class="mt-6"
        elevation="24"
        rounded="lg"
        max-width="434"
        color="rgba(255,255,255,0.5)">
        <v-img
          height="100%"
          class="pb-3">
          <v-row>
            <v-col
              align-self="start"
              class="pa-0"
              cols="12">
              <v-avatar
                class="profile"
                size="116">
                <v-img :src="joaoImage"></v-img>
              </v-avatar>
            </v-col>
            <v-col class="py-0">
              <v-list-item dark>
                <v-list-item-content>
                  <v-list-item-title class="text-h6">João Victor Martins</v-list-item-title>
                  <v-list-item-subtitle>Product Manager</v-list-item-subtitle>
                </v-list-item-content>
                <v-btn 
                  color="rgba(0, 0, 0, 0.5)"
                  min-width="0"
                  width="46px"
                  height="46px"
                  class="justify-center mt-0"
                  href="https://www.linkedin.com/in/joaovictorms">
                  <linkedinIcon class="filter-white" height="28px"></linkedinIcon>
                </v-btn>
              </v-list-item>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
      </v-row>
      <v-row justify="space-between">
        <v-card
          class="mt-6"
          elevation="24"
          rounded="lg"
          max-width="434"
          color="rgba(255,255,255,0.5)">
          <v-img
            height="100%"
            class="pb-3">
            <v-row>
              <v-col
                align-self="start"
                class="pa-0"
                cols="12">
                <v-avatar
                  class="profile"
                  size="116">
                  <v-img :src="leandroImage"></v-img>
                </v-avatar>
              </v-col>
              <v-col class="py-0">
                <v-list-item dark>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">Leandro Lima dos Santos</v-list-item-title>
                    <v-list-item-subtitle>Graphic Designer</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-btn 
                    color="rgba(0, 0, 0, 0.5)"
                    min-width="0"
                    width="46px"
                    height="46px"
                    class="justify-center mt-0"
                    href="https://www.linkedin.com/in/leandrolimaeng">
                    <linkedinIcon class="filter-white" height="28px"></linkedinIcon>
                  </v-btn>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
        <v-card
          class="mt-6"
          elevation="24"
          rounded="lg"
          max-width="434"
          color="rgba(255,255,255,0.5)">
          <v-img
            height="100%"
            class="pb-3">
            <v-row>
              <v-col
                align-self="start"
                class="pa-0"
                cols="12">
                <v-avatar
                  class="profile"
                  size="116">
                  <v-img :src="rodrigoImage"></v-img>
                </v-avatar>
              </v-col>
              <v-col class="py-0">
                <v-list-item dark>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">Rodrigo Takeshi Kamei Tawata</v-list-item-title>
                    <v-list-item-subtitle>Front-End Developer</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-btn 
                    color="rgba(0, 0, 0, 0.5)"
                    min-width="0"
                    width="46px"
                    height="46px"
                    class="justify-center mt-0"
                    href="https://www.linkedin.com/in/rodrigo-tawata-3777a9195">
                    <linkedinIcon class="filter-white" height="28px"></linkedinIcon>
                  </v-btn>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
        </v-card>
      </v-row>
      <v-container class='my-16'></v-container>
    </v-container>
  </v-app>
</template>

<script>
import linkedinIcon from '@/static/icons/linkedin-icon.svg'
export default {
  data () {
    return {
      andreImage: require('@/static/images/team/andre.jpg'),
      gustavoImage: require('@/static/images/team/gustavo.jpg'),
      joaoImage: require('@/static/images/team/joao.jpg'),
      leandroImage: require('@/static/images/team/leandro.jpg'),
      rodrigoImage: require('@/static/images/team/rodrigo.jpg'),
      texts: {
        begin: 'O apollo saúde é um projeto que foi iniciado após um desafio proposto pela Roche para os alunos do 3º ano de Engenharia Mecatrônica da FIAP, e o desafio é digitalizar o setor da saúde, impactá-lo através do meio digital e virtualizar o atendimento médico.',
        ourMission: 'Nossa missão é direcionar o paciente o mais rápido possível aos profissionais da saúde, bastando apenas entrar em nossa plataforma e fazer um pré diagnóstico com nosso modelo baseado em Inteligência Artificial, assim o paciente será redirecionado para um médico especialista. Após isso, o paciente pode conversar com este médico e marcar uma videochamada ou até mesmo uma consulta, e se precisar, marcar exames com os nossos laboratórios parceiros. Os resultados e receitas são todos digitais, e o paciente poderá receber a nossa mail box contendo todos os remédios prescritos pelos seus médicos.',
      }
    }
  },
  components: {
    linkedinIcon,
  },
}
</script>

<style lang='sass'>
.v-main 
  background: linear-gradient(to right, #663DEF, #E34BE2)
.title
  max-width: 5px
.span
  display: inline-block
  line-height: 5px
.filter-white
  filter: brightness(0%) invert(100%)
</style>