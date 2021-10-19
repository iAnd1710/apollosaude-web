<template>
  <div class="kit">
    <h1 class="text-center text-h4 font-weight-bold"> Kits</h1>
    <h3 class="text-center text-h9 mt-9">O Kit contém Álcool em gel para higienização das mãos, caixa de remédios com os
medicamentos mais utilizados e recomendados para ocasiões do dia a dia, vitamina D3 para auxílio e manutenção da imuidade e duas máscaras compostas de material antiviral
para proteção diária contra o COVID-19. Todos esses itens serão transportados e entregues a sua casa dentro de uma caixa de metal personalizada 
Apollo Saúde, impedindo assim a produção excessiva de lixo. Os Kits Saúde poderão ser solicitados através do aplicativo Apollo Health e do portal
Apollo Health. Para saber se o os Kits Saúde da Apollo Health serão entregues a sua casa, entre em contato com o seu plano de saúde..</h3>

      <v-row
        justify="space-around">
        <v-card class="ma-9"
          color="rgba(255,255,255,0.7)"
          elevation="12"
          rounded="lg"
          width="21%">

        
          <v-card-text>
            <div class="text-h6 text--primary font-weight-bold">Álcool em gel</div>
            <img :src="alcool" style="height:220; width:100%" />
          </v-card-text>
        <v-img
          height="100%"
          class="pb-3">

        </v-img>
        </v-card>

        <v-card class="ma-9"
          color="rgba(255,255,255,0.7)"
          elevation="12"
          rounded="lg"
          width="21%"
        >
          <v-card-text>
            <div class="text-h6 text--primary font-weight-bold">Caixa de remédio</div>
            <img :src="caixaRemedio" style="height:220; width:100%" />
          </v-card-text>
        </v-card>

        <v-card class="ma-9"
          color="rgba(255,255,255,0.7)"
          elevation="12"
          rounded="lg"
          width="21%"
        >
          <v-card-text>
            <div class="text-h6 text--primary font-weight-bold">Mail Box</div>
            <img :src="mailBox" style="height:220; width:100%" />
          </v-card-text>
        </v-card>

        <v-card class="ma-9"
          color="rgba(255,255,255,0.7)"
          elevation="12"
          rounded="lg"
          width="21%"
        >
          <v-card-text>
            <div class="text-h6 text--primary font-weight-bold">Metal Box</div>
            <img :src="metalBox" style="height:220; width:100%" />
          </v-card-text>
        </v-card>

        <v-card class="ma-9"
          color="rgba(255,255,255,0.7)"
          elevation="12"
          rounded="lg"
          width="21%"
        >
          <v-card-text>
            <div class="text-h6 text--primary font-weight-bold">Máscaras</div> 
            <img :src="mascaraPL" style="height:220; width:100%" />          
          </v-card-text>
        </v-card>
       </v-row>       
  </div>
</template>
<script>
import alcool from "static/kits/alcool-em-gel.png"
import caixaRemedio from "static/kits/caixa-de-remedio.png"
import mailBox from "static/kits/caixa-de-envio.png"
import metalBox from "static/kits/caixa-de-metal.png"
import mascaraPL from "static/kits/mascara-preta-lado.png"


export default {
    data: function () {
        return {
            alcool: alcool,
            caixaRemedio: caixaRemedio,
            mailBox: mailBox,
            metalBox: metalBox,
            mascaraPL: mascaraPL
        }
    }
}
</script>