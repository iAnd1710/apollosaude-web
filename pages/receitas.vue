<template>
    <v-app style="background-color:rgba(0, 0, 0, 0);">
        <div class="mt-2 white--text text-h6">
            Nesta página estão todas as suas receitas, você pode escolher receber os nossos <a href="./kits" class="text-decoration-underline primRY-text">kits</a> que contém os remédios de sua receita.
        </div>
        <v-divider class="mt-5 mb-5"></v-divider>
        <h5 class="mt-5 white--text text-h5">Olá, Apollo</h5>
        <section>
          <v-card
              color="rgba(0, 0, 0, 0)"
              flat
              width="100%"
              class="mx-auto mt-13"
              max-width="800">
              <v-card-title class="font-weight-bold white--text pl-0"> Suas receitas </v-card-title>
              <v-list-item target="_blank" href="/docs/prescriptions/Apollo_Prescricao_271019612.pdf">
                  <v-list-item-content>
                    <v-row class="ml-0 mr-0">
                      <v-icon size="23" color="white" class="pr-5">health_and_safety</v-icon>
                      <v-row class="ml-0 mr-0" justify="space-between" align="center">
                          <div class="white--text text-subtitle-1 font-weight-bold">Dr. Gelol</div>
                          <div class="white--text text-body-2"> Dermatologista </div>
                          <div class="white--text text-overline align-center">08/10/2021</div>
                      </v-row>
                    </v-row>
                  </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <v-list-item target="_blank" href="/docs/prescriptions/Apollo_Prescricao_271019611.pdf">
                  <v-list-item-content>
                    <v-row class="ml-0 mr-0">
                      <v-icon size="23" color="white" class="pr-5">health_and_safety</v-icon>
                      <v-row class="ml-0 mr-0" justify="space-between" align="center">
                          <div class="white--text text-subtitle-1 font-weight-bold"> Dr. Luciano Rigoni Calleri </div>
                          <div class="white--text text-body-2"> Ortopedista </div>
                          <div class="white--text text-overline align-center">01/10/2021</div>
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
.filter-black
  filter: invert(100%)
.v-list-item
    padding: 0
.v-application .text-subtitle-1
  width: 220px
</style>
