<template>
  <v-container>
    <v-row justify='center' align='center' class='mt-10'>
      <img src='/illustrations/order.svg' :width='imageSize' class='ma-16' alt='Order' />
      <v-col>
        <div align='start' class='mt-0'>
          <h1 class='text-h4 font-weight-bold'>Apollo Kits</h1>
          <p class='text-h6 mt-6'>
            O Kit contém Álcool em gel para higienização das mãos, caixa de remédios com os medicamentos mais utilizados e recomendados para ocasiões do dia a dia. Vitamina D3 para auxílio e manutenção da imuidade e duas máscaras compostas de material antiviral para proteção diária contra o COVID-19. Todos esses itens serão transportados e entregues em sua casa dentro de uma caixa de metal personalizada Apollo Saúde, impedindo assim a produção excessiva de lixo. Os Kits Saúde podem ser solicitados através do aplicativo Apollo Saúde.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-divider class='my-10'></v-divider>
    <v-row justify='center'>

      <v-card
        outlined
        class='pa-2 ma-3 box'
        :width='isMobile ? "100%" : "240px"' height='250px'
      >
        <v-card-text>
          <v-row align='center'>
            <p class='text-h5 text--primary font-weight-bold ml-1 mt-4'>Álcool em gel</p>
          </v-row>
          <v-row align='center' justify='center'>
            <img :src='alcool' width='100%' height='160px' alt='Kits'
                 style='border-radius: 20px; object-fit: cover;' />
          </v-row>
        </v-card-text>
      </v-card>

      <v-card
        outlined
        class='pa-2 ma-3 box'
        :width='isMobile ? "100%" : "240px"' height='250px'
      >
        <v-card-text>
          <v-row align='center'>
            <p class='text-h5 text--primary font-weight-bold ml-1 mt-4'>Medicamentos</p>
          </v-row>
          <v-row align='center' justify='center'>
            <img :src='caixaRemedio' width='100%' height='160px' alt='Kits'
                 style='border-radius: 20px; object-fit: cover;' />
          </v-row>
        </v-card-text>
      </v-card>

      <v-card
        outlined
        class='pa-2 ma-3 box'
        :width='isMobile ? "100%" : "240px"' height='250px'
      >
        <v-card-text>
          <v-row align='center'>
            <p class='text-h5 text--primary font-weight-bold ml-1 mt-4'>Tratamentos</p>
          </v-row>
          <v-row align='center' justify='center'>
            <img :src='caixaRemedio2' width='100%' height='160px' alt='Kits'
                 style='border-radius: 20px; object-fit: cover;' />
          </v-row>
        </v-card-text>
      </v-card>

      <v-card
        outlined
        class='pa-2 ma-3 box'
        :width='isMobile ? "100%" : "240px"' height='250px'
      >
        <v-card-text>
          <v-row align='center'>
            <p class='text-h5 text--primary font-weight-bold ml-1 mt-4'>Vitaminas</p>
          </v-row>
          <v-row align='center' justify='center'>
            <img :src='caixaPilulas' width='100%' height='160px' alt='Kits'
                 style='border-radius: 20px; object-fit: cover;' />
          </v-row>
        </v-card-text>
      </v-card>

      <v-card
        outlined
        class='pa-2 ma-3 box'
        :width='isMobile ? "100%" : "240px"' height='250px'
      >
        <v-card-text>
          <v-row align='center'>
            <p class='text-h5 text--primary font-weight-bold ml-1 mt-4'>Máscaras</p>
          </v-row>
          <v-row align='center' justify='center'>
            <img :src='mascaraPL' width='100%' height='160px' alt='Kits'
                 style='border-radius: 20px; object-fit: cover;' />
          </v-row>
        </v-card-text>
      </v-card>

      <v-card
        outlined
        class='pa-2 ma-3 box'
        :width='isMobile ? "100%" : "240px"' height='250px'
      >
        <v-card-text>
          <v-row align='center'>
            <p class='text-h5 text--primary font-weight-bold ml-1 mt-4'>Máscaras Pro</p>
          </v-row>
          <v-row align='center' justify='center'>
            <img :src='mascaraBL' width='100%' height='160px' alt='Kits'
                 style='border-radius: 20px; object-fit: cover;' />
          </v-row>
        </v-card-text>
      </v-card>

      <v-card
        outlined
        class='pa-2 ma-3 box'
        :width='isMobile ? "100%" : "240px"' height='250px'
      >
        <v-card-text>
          <v-row align='center'>
            <p class='text-h5 text--primary font-weight-bold ml-1 mt-4'>Mail Box</p>
          </v-row>
          <v-row align='center' justify='center'>
            <img :src='mailBox' width='100%' height='160px' alt='Kits'
                 style='border-radius: 20px; object-fit: cover;' />
          </v-row>
        </v-card-text>
      </v-card>

      <v-card
        outlined
        class='pa-2 ma-3 box'
        :width='isMobile ? "100%" : "240px"' height='250px'
      >
        <v-card-text>
          <v-row align='center'>
            <p class='text-h5 text--primary font-weight-bold ml-1 mt-4'>Metal Box</p>
          </v-row>
          <v-row align='center' justify='center'>
            <img :src='metalBox' width='100%' height='160px' alt='Kits'
                 style='border-radius: 20px; object-fit: cover;' />
          </v-row>
        </v-card-text>
      </v-card>

    </v-row>
    <v-container class='my-16'></v-container>
    <v-container class='my-16'></v-container>
  </v-container>
</template>
<script>
export default {
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    },
    imageSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 300
        case 'sm':
          return 300
        default:
          return 400
      }
    }
  },
  data() {
    return {
      alcool: '/kits/alcool-em-gel.jpeg',
      caixaRemedio: '/kits/caixa-de-remedio.jpeg',
      caixaPilulas: '/kits/caixa-de-pilulas.jpeg',
      caixaRemedio2: '/kits/caixa-de-remedio-2.jpeg',
      mailBox: '/kits/caixa-de-envio.jpeg',
      metalBox: '/kits/caixa-de-metal.jpeg',
      mascaraPL: '/kits/mascara-preta-lado.jpeg',
      mascaraBL: '/kits/mascara-branca-lado.jpeg'
    }
  }
}
</script>
