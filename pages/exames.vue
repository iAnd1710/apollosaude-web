<template>
    <v-app>
      <h5 class="mt-5  text-h5">Olá, Apollo</h5>
        <section>
          <v-card
              color="rgba(0, 0, 0, 0)"
              flat
              width="100%"
              class="mx-auto mt-13"
              max-width="800">
              <v-card-title class="font-weight-bold  pl-0"> Seus exames </v-card-title>
              <v-list-item target="_blank" href="/docs/exams/Apollo_Exame_2710196111.pdf">
                  <v-list-item-content>
                    <v-row class="ml-0 mr-0">
                      <LabIcon class="pr-5 black-filter" height="20px"></LabIcon>
                      <v-row class="ml-0 mr-0" justify="space-between" align="center">
                          <div class=" text-subtitle-1 font-weight-bold">Delboni Auriemo</div>
                          <div class=" text-body-2">Análises Clínicas</div>
                          <div class=" text-overline align-center">11/10/2021</div>
                      </v-row>
                    </v-row>
                  </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item target="_blank" href="/docs/exams/Apollo_Exame_2710196112.pdf">
                  <v-list-item-content>
                    <v-row class="ml-0 mr-0">
                      <LabIcon class="pr-5 black-filter" height="20px"></LabIcon>
                      <v-row class="ml-0 mr-0" justify="space-between" align="center">
                          <div class=" text-subtitle-1 font-weight-bold">Fleury</div>
                          <div class=" text-body-2">Análises Clínicas</div>
                          <div class=" text-overline align-center">04/10/2021</div>
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
  width: 150px
</style>
