<template>
  <v-card
    outlined
    class='pa-2 ma-3 box'
    :width='isMobile ? "100%" : "240px"' height='250px'
  >
    <v-card-text>
      <v-row align='center'>
        <v-icon size='26' color='black' class='ml-2'>{{ icon }}</v-icon>
        <p class='text-h5 text--primary font-weight-bold ml-1 mt-4'>{{ title }}</p>
      </v-row>
      <div class='mt-2 text--primary font-weight-bold'>{{ subtitle }}</div>
      <div class='mt-2 text-subtitle-2 text--primary'>
        <v-icon size='12' color='primary'>circle</v-icon>
        {{ content }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        :href='actionLink'
        text
        color='primary'
      >
        {{ actionName }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ButtonCard',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    actionLink: {
      type: String,
      required: true
    },
    actionName: {
      type: String,
      required: true
    }
  },
  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.smAndDown
    },
  }
}
</script>
