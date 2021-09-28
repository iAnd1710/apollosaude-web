<template>
  <v-col align='center'>
    <h1 v-if='error.statusCode === 404' className='text-h3 ma-5 font-weight-bold'>
      {{ pageNotFound }}
    </h1>
    <h1 v-else className='text-h3 ma-5 font-weight-bold'>
      {{ otherError }}
    </h1>
    <NuxtLink to='/' class='text-h5 ma-5'>
      Voltar
    </NuxtLink>
  </v-col>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Nada foi encotrado por aqui',
      otherError: 'Ops... Ocorreu um erro :('
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
