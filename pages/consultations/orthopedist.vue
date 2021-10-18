<template>
    <v-app style="background-color:rgba(0, 0, 0, 0);">
      <h5 class="mt-5  text-h5">Olá, João</h5>
        <section>
          <v-card
              color="rgba(0, 0, 0, 0)"
              flat
              width="100%"
              class="mx-auto mt-13"
              max-width="800">
              <v-card-title class="font-weight-bold  pl-0"> Suas consultas </v-card-title>
              <v-list-item href="">
                  <v-list-item-content>
                    <v-row class="ml-0 mr-0">
                      <LabIcon class="pr-5 black-filter" height="20px"></LabIcon>
                      <v-row class="ml-0 mr-0" justify="space-between" align="center">
                          <div class=" text-subtitle-1 font-weight-bold"> Dr. Luciano Rigoni Calleri </div>
                          <div class=" text-body-2"> Ortopedista </div>
                          <div class=" text-overline align-center">14/10/2021</div>
                      </v-row>
                    </v-row>
                  </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item target="_blank" href="">
                  <v-list-item-content>
                    <v-row class="ml-0 mr-0">
                      <LabIcon class="pr-5 black-filter" height="20px"></LabIcon>
                      <v-row class="ml-0 mr-0" justify="space-between" align="center">
                          <div class=" text-subtitle-1 font-weight-bold">Dr. João</div>
                          <div class=" text-body-2"> Dermatologista </div>
                          <div class=" text-overline align-center">15/07/2021</div>
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
.title
  max-width: 500px
.span
  display: inline-block
  line-height: 12px
.black-filter
  filter: invert(100%)
.v-list-item
    padding: 0
.v-application .text-subtitle-1
  width: 220px
</style>
