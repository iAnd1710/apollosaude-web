<template>
  <v-card
    elevation='24'
    rounded='lg'
    max-width='300'
    class='ma-5 pa-2'
    color='primary'>
    <v-img
      height='100%'
      class='pb-3'>
      <v-row>
        <v-col
          align-self='start'
          class='pa-0'
          cols='12'>
          <v-avatar
            class='profile mt-6 ml-6'
            rounded
            size='80'>
            <v-img :src='image'></v-img>
          </v-avatar>
        </v-col>
        <v-col class='py-0'>
          <v-list-item dark>
            <v-list-item-content>
              <v-list-item-title class='text-h6'>{{ name }}</v-list-item-title>
              <v-list-item-subtitle>{{ bio }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-btn
              elevation='0'
              color='white'
              min-width='0'
              width='46px'
              height='46px'
              class='justify-center ma-0'
              target='_blank'
              :href='link'>
              <img src='/icons/linkedin-icon.svg' class='black-filter' height='28px' alt='LinkedIn' />
            </v-btn>
          </v-list-item>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    bio: {
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
