<template>
    <v-app style="background-color:rgba(0, 0, 0, 0);">
      <h5 class="mt-5 white--text text-h5">Olá, Apollo</h5>
        <section>
          <v-card
              color="rgba(0, 0, 0, 0)"
              flat
              width="100%"
              class="mx-auto mt-13"
              max-width="800">
              <v-card-title class="font-weight-bold white--text pl-0"> Suas consultas </v-card-title>
              <v-list-item href="./consulta/ortopedista">
                  <v-list-item-content>
                    <v-row class="ml-0 mr-0">
                      <LabIcon class="pr-5 filter-black" height="20px"></LabIcon>
                      <v-row class="ml-0 mr-0" justify="space-between" align="center">
                          <div class="white--text text-subtitle-1 font-weight-bold"> Dr. Luciano Rigoni Calleri </div>
                          <div class="white--text text-body-2"> Ortopedista </div>
                          <div class="white--text text-overline align-center">01/10/2021</div>
                      </v-row>  
                    </v-row>                  
                  </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item target="_blank" href="">
                  <v-list-item-content>
                    <v-row class="ml-0 mr-0">
                      <LabIcon class="pr-5 filter-black" height="20px"></LabIcon>
                      <v-row class="ml-0 mr-0" justify="space-between" align="center">
                          <div class="white--text text-subtitle-1 font-weight-bold">Dr. João</div>
                          <div class="white--text text-body-2"> Dermatologista </div>
                          <div class="white--text text-overline align-center">08/10/2021</div>
                      </v-row>  
                    </v-row>                  
                  </v-list-item-content>
              </v-list-item>
              <v-card-actions></v-card-actions>
          </v-card>
        </section>
    </v-app>
</template>

<script>
import LabIcon from '@/static/images/lab.svg'
export default {
  components: {
    LabIcon
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
.v-list-item
    padding: 0
.v-application .text-subtitle-1
  width: 220px
</style>