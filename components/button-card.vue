<template>
  <v-card
    outlined
    class='pa-2 ma-3 box'
    :width='isMobile ? "100%" : "240px"' height='250px'
  >
    <v-card-text>
      <div class='text-h5 text--primary font-weight-bold'>
        <v-icon size='26' color='black'>{{ icon }}</v-icon>
        {{ title }}
      </div>
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
        color='deep-purple accent-4'
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
