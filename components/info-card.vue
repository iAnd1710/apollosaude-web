<template>
  <v-card color='primary' elevation='10' class='pa-1 ma-5 box' width='250px' height='250px'>
    <v-card-title class='white--text'>
      {{ title }}
      <v-spacer></v-spacer>
      <v-btn fab elevation='0' color='white' :href='link' target="_blank"><v-icon color='black'>{{ icon }}</v-icon></v-btn>
    </v-card-title>
    <v-card-text class='white--text'>
      {{ description }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>
