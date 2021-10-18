<template>
    <v-app>

    </v-app>
</template>

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
import alcool from "static/kit/alcool-em-gel.png"
import caixaRemedio from "static/kit/caixa-de-remedio.png"
import mailBox from "static/kit/caixa-de-envio.png"
import metalBox from "static/kit/caixa-de-metal.png"
import mascaraPL from "static/kit/mascara-preta-lado.png"


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

<style lang='sass'>
.title
  max-width: 500px
.span
  display: inline-block
  line-height: 12px
.black-filter
  filter: invert(100%)
.v-list-item
    padding: 0
.v-application .text-subtitle-1
  width: 220px
</style>
