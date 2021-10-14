<template>
  <v-app style="background-color:rgba(0,0,0,1)">
    <v-row class="fill-height">
      <v-col>
        <v-sheet 
          class="cima"
          height="64">
          <v-toolbar
            flat>
            <v-btn
              outlined
              class="mr-4"
              color="white"
              @click="setToday">Hoje
            </v-btn>
            <v-btn
              fab
              text
              small
              color="white"
              @click="prev"><v-icon>navigate_before</v-icon>
            </v-btn>
            <v-btn
              fab
              text
              small
              color="white"
              @click="next"><v-icon>navigate_next</v-icon>
            </v-btn>
            <v-toolbar-title class="white--text" v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
          </v-toolbar>
        </v-sheet>



        <v-sheet
          class="baixo"
          height="600"
          >
          <v-calendar
              class="rounded-lg calendar"
              ref="calendar" 
              v-model="focus"
              color="rgba(255, 255, 255, 0.4)"  
              :events="events"
              :event-color="getEventColor"
              :type="type"
              @click:event="showEvent"
              @click:mais="viewDay"
              @click:date="viewDay"
          >
          </v-calendar>
              
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x>
            <v-card
              color="rgba(255, 255, 255, 0.9)"
              min-width="350px"
              flat
              rounded="10"
            >
              <v-toolbar
                color="rgba(0,0,0,0.5)">
                <v-btn icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text >
                <span class="black--text" v-html="selectedEvent.details"></span>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  text
                  color="secondary"
                  @click="selectedOpen = false">
                  Cancelar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
    <v-container class='my-16'></v-container>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Mês',
        week: 'Semana',
        day: 'Dia',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [
        {
          name: 'Ortopedista',
          start: '2021-10-01 13:30',
          color: "rgba(0, 0, 0, 0.5)",
          details: "Consulta com o Dr. Luciano"
        },
        {
          name: 'Injeção de Urânio Enriquecido',
          start: '2021-10-01 19:00',
          color: "rgba(0, 0, 0, 0.5)",
          details: "Injeção de Urânio Enriquecido solicitado pelo Dr. Luciano"
        },
        {
          name: 'Exame de sangue',
          start: '2021-10-04 09:00',
          color: "rgba(0, 0, 0, 0.5)",
          details: "Exame de sangue solicitado pelo Dr. Luciano"
        },
        {
          name: 'Injeção de Urânio Enriquecido',
          start: '2021-10-05 19:00',
          color: "rgba(0, 0, 0, 0.5)",
          details: "Injeção de Urânio Enriquecido solicitado pelo Dr. Luciano"
        },
        {
          name: 'Dermatologista',
          start: '2021-10-08 14:00',
          end: '2021-10-08 14:30',
          color: "rgba(0, 0, 0, 0.5)",
          details: "Consulta com o Dr. Gelol"
        },
        {
          name: 'Injeção de Urânio Enriquecido',
          start: '2021-10-08 19:00',
          color: "rgba(0, 0, 0, 0.5)",
          details: "Injeção de Urânio Enriquecido solicitado pelo Dr. Luciano"
        },
        {
          name: 'Exame de sangue',
          start: '2021-10-11 10:00',
          end: '2021-10-11 11:00',
          color: "rgba(0, 0, 0, 0.5)",
          details: "Exame de sangue no laboratório Delboni Auriemo"
        },
        {
          name: 'Injeção de Urânio Enriquecido',
          start: '2021-10-12 19:00',
          color: "rgba(0, 0, 0, 0.5)",
          details: "Injeção de Urânio Enriquecido solicitado pelo Dr. Luciano"
        },
        {
          name: 'Passar Gelol',
          start: '2021-10-14 15:34',
          color: "rgba(0, 0, 0, 0.5)",
          details: "Passar Gelol por recomendação do Dr. Gelol"
        },
        {
          name: 'Injeção de Urânio Enriquecido',
          start: '2021-10-15 19:00',
          color: "rgba(0, 0, 0, 0.5)",
          details: "Injeção de Urânio Enriquecido solicitado pelo Dr. Luciano"
        },
        {
          name: 'Injeção de Urânio Enriquecido',
          start: '2021-10-19 19:00',
          color: "rgba(0, 0, 0, 0.5)",
          details: "Injeção de Urânio Enriquecido solicitado pelo Dr. Luciano"
        },
        {
          name: 'Injeção de Urânio Enriquecido',
          start: '2021-10-22 19:00',
          color: "rgba(0, 0, 0, 0.5)",
          details: "Injeção de Urânio Enriquecido solicitado pelo Dr. Luciano"
        },
        {
          name: 'Injeção de Urânio Enriquecido',
          start: '2021-10-26 19:00',
          color: "rgba(0, 0, 0, 0.5)",
          details: "Injeção de Urânio Enriquecido solicitado pelo Dr. Luciano"
        },
      ],
    }),
    mounted () {
      this.$refs.calendar.checkChange()
    },
    methods: {
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          requestAnimationFrame(() => requestAnimationFrame(() => open()))
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
    },
  }
</script>




<style lang='sass'>
.theme--light.v-sheet
   background: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0))
.calendar .v-outside
    background-color: transparent !important
.theme--light.v-calendar-weekly
   background-color: transparent !important
.theme--light.v-application
   background-color: transparent !important
.cima .v-sheet
    background-color: transparent !important
.baixo .v-sheet
   background: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0))
.v-main 
  background: linear-gradient(to right, #663DEF, #E34BE2)
.title
  max-width: 500px
.span
  display: inline-block
  line-height: 12px
.v-calendar .v-btn__content 
    color: white
.theme--light .v-calendar-weekly .v-calendar-weekly__head-weekday
    color: black !important
    border: none !important
.theme--light .v-calendar-weekly
    border: none !important
.theme--light .v-calendar-weekly .v-calendar-weekly__day
    border: rgba(255,255,255,0.5) 1px solid !important
.v-calendar-daily
    background-color: transparent !important
.v-menu__content
    border-radius: 30px !important
</style>
