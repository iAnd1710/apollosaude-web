<template>
  <v-container>
    <v-col justify="center" align='start' class='my-16'>
      <div class='title ma-5'>
        <div :class="`font-weight-bold ${titleSize}`">Em breve.</div>
        <div :class='titleMargin'>
          <span :class="`accent font-weight-bold ${titleSize}`">a nova</span>
        </div>
        <div :class='titleMargin'>
          <span :class="`accent font-weight-bold ${titleSize}`">mídia social.</span>
        </div>
      </div>
    </v-col>
    <v-container class='my-16'></v-container>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  computed: {
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
