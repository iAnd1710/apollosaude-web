<template>
  <v-card elevation='0' class='pa-1 py-6 ma-5 box' width='250px' height='200px'>
    <v-col justify='space-between'>
      <v-btn fab elevation='0' color='accent' class='mb-3' href='/home'>
        <v-icon color='white' large>{{ icon }}</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <span class='text-h6 font-weight-bold'>
      {{ title }}
    </span>
    </v-col>
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
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
