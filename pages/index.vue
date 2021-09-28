<template>
  <v-container>
    <v-col justify="center" align='center' class='my-16'>
      <img src='/static/images/apollohealth-icon.svg' :height='logoSize' alt='Apollo Health'/>
      <div class='title ma-5'>
        <div :class="`font-weight-bold ${titleSize}`">Compartilhe a sua história</div>
      </div>
      <div :class='titleMargin'>
        <span :class="`primary--text font-weight-bold ${titleSize}`">EM BREVE</span>
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
        case 'xs': return 140
        case 'sm': return 170
        default: return 200
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
  max-width: 500px
.span
  display: inline-block
  line-height: 12px
</style>
