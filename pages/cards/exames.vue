<template>
    <v-app style="background-color:rgba(0, 0, 0, 0);">
      <h5 class="mt-5 white--text text-h5">Olá, André</h5>
        <section>
          <v-card
              color="rgba(0, 0, 0, 0)"
              flat
              width="100%"
              class="mx-auto mt-13"
              max-width="800">
              <v-card-title class="font-weight-bold white--text pl-0"> Seus exames </v-card-title>
              <v-list-item target="_blank" href="https://drive.google.com/file/d/10VtcO9bVayk4ZJZAvIh_yiGGkP0sMNem/view?usp=sharing">
                  <v-list-item-content>
                    <v-row class="ml-0 mr-0">
                      <LabIcon class="pr-5 filter-black" height="20px"></LabIcon>
                      <v-row class="ml-0 mr-0" justify="space-between" align="center">
                          <div class="white--text text-subtitle-1 font-weight-bold">Delboni Auriemo</div>
                          <div class="white--text text-body-2">Análises Clínicas</div>
                          <div class="white--text text-overline align-center">11/10/2021</div>
                      </v-row>  
                    </v-row>                  
                  </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item target="_blank" href="https://drive.google.com/file/d/1tNqh9Utmbjma85UZ2j1kjBYRAG5mRL7x/view?usp=sharing">
                  <v-list-item-content>
                    <v-row class="ml-0 mr-0">
                      <LabIcon class="pr-5 filter-black" height="20px"></LabIcon>
                      <v-row class="ml-0 mr-0" justify="space-between" align="center">
                          <div class="white--text text-subtitle-1 font-weight-bold">Fleury</div>
                          <div class="white--text text-body-2">Análises Clínicas</div>
                          <div class="white--text text-overline align-center">15/07/2021</div>
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
  width: 150px
</style>