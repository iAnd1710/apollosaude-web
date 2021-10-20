<template>
<v-app>
  <v-container class='my-6'>
    <v-row justify='center' align='center'>
      <img src='/illustrations/medicine.svg' :width='imageSize' class='mx-16' alt='Technology' />
      <v-col justify='center' align='center' class='my-6'>
        <div class='title ma-5'>
          <div align='start' class='mt-0 mb-7'>
            <h1 class='text-h4 font-weight-bold'>{{ hello }},</h1>
            <p class='text-h5 mt-6 font-weight-bold'>Como está se sentindo hoje? Informe alguns sintomas.</p>
          </div>
          <v-row align='center' justify='center' class='mx-1 my-5'>
            <v-text-field
              v-model='symptoms'
              label="Digite aqui"
              solo
            ></v-text-field>
            <v-btn fab small color='primary' class='ml-3 mb-6' v-on:click="predict"
                   @click="predict">
              <v-icon color='white'>send</v-icon>
            </v-btn>
          </v-row>
        </div>
        <div :class='titleMargin'>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <div
    class="d-flex flex-column justify-content-center align-items-center"
  >
    <v-col>
      <div v-if='APIResult !== ""' align='start' class='mt-0'>
        <h1 class='text-h5 font-weight-bold'>Olá, seguem algumas informações para você! Há uma probalididade de ser {{disease}}. Consulte um médico especializado para mais informações.</h1>
        <p class='text-h6 mt-6'>
          Seguem algumas sugestões. {{ description }}
        </p>
        <p class='text-h6 mt-6'>
          A Apollo fica à sua disposição! Conte conosco!
        </p>
      </div>
    </v-col>
  </div>
</v-app>
</template>

<script>
import { getAPI } from '~/axios';
export default {
  name: "Disease",
  data() {
    return {
      symptoms: '',
      APIResult: '',
      disease: '',
      description: '',
    };
  },
  computed: {
    isMobile () {
      return this.$vuetify.breakpoint.smAndDown
    },
    imageSize () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 300
        case 'sm': return 300
        default: return 400
      }
    },
    hello() {
      const current = new Date()
      if (current.getHours() < 18 && current.getHours() > 12) {
        return 'Boa tarde'
      } else if (current.getHours() > 17 || current.getHours() < 4) {
        return 'Boa noite'
      } else {
        return 'Bom dia'
      }
    },
    logoSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 60
        case 'sm':
          return 70
        default:
          return 120
      }
    },
    titleSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'text-h4'
        case 'sm':
          return 'text-h3'
        default:
          return 'text-h3'
      }
    },
    titleMargin() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'mt-2'
        case 'sm':
          return 'mt-4'
        default:
          return 'mt-6'
      }
    }
  },
  methods: {
    findSymptoms() {
      if(this.symptoms === "") {
        return ""
      } else {
        let sintomas = {
          "abdominal_pain": "Dor abdominal",
          "abnormal_menstruation": "Menstruação anormal",
          "acidity": "Acidez",
          "acute_liver_failure": "Insuficiência hepática aguda",
          "altered_sensorium": "Sensorio alterado",
          "anxiety": "Ansiedade",
          "belly_pain": "Dor na barriga",
          "blackheads": "Cravos pretos",
          "bladder_discomfort": "Desconforto na bexiga",
          "blister": "Bolha",
          "blood_in_sputum": "Sangue na expectoração",
          "bloody_stool": "Fezes sangrentas",
          "blurred_and_distorted_vision": "Visão turva e distorcida",
          "breathlessness": "Falta de ar",
          "brittle_nails": "Unhas quebradiças",
          "bruising": "Hematomas",
          "burning_micturition": "Queima de micção",
          "chest_pain": "Dor no peito",
          "cold_hands_and_feets": "Mãos e pés frios",
          "coma": "Coma",
          "congestion": "Congestionamento",
          "constipation": "Constipação",
          "continuous_feel_of_urine": "Constante vontade de urinar",
          "continuous_sneezing": "Espirros contínuos",
          "cough": "Tosse",
          "cramps": "Cólicas",
          "dark_urine": "Urina escura",
          "depression": "Depressão",
          "diarrhoea": "Diarréia",
          "dischromic_patches": "Manchas discrômicas",
          "distention_of_abdomen": "Distensão do abdômen",
          "drying_and_tingling_lips": "Lábios secos e formigando",
          "enlarged_thyroid": "Tireóide aumentada",
          "excessive_hunger": "Fome excessiva",
          "extra_marital_contacts": "Contatos extraconjugais",
          "family_history": "Histórico familiar",
          "fast_heart_rate": "Frequência cardíaca rápida",
          "fatique": "Fadiga",
          "fluid_over_load": "Sobrecarga de fluido",
          "fluid_overload": "Excesso de fluido",
          "foul_smell_of_urine": "Cheiro ruim na urina",
          "headache": "Dor de cabeça",
          "high_fever": "Febre alta",
          "hip_joint_pain": "Dor nas articulações do quadril",
          "history_of_alcohol_consumption": "Histórico de consumo de álcool",
          "increased_appetite": "Aumento do apetite",
          "indigestion": "indigestão",
          "inflammatory_nails": "Unhas inflamadas",
          "internal_itching": "Coceira interna",
          "irregular_sugar_level": "Nível de açúcar irregular",
          "irritability": "Irritabilidade",
          "irritation_in_anus": "Irritação no ânus",
          "itching": "Coceira",
          "joint_pain": "Dor nas articulações",
          "knee_pain": "Dor no joelho",
          "lack_of_concentration": "Falta de concentração",
          "lethargy": "Letargia",
          "loss_of_appetite": "Perda de apetite",
          "loss_of_balance": "Perda de equilíbrio",
          "loss_of_smell": "Perda de olfato",
          "malaise": "Mal-estar",
          "mild_fever": "Febre amarela",
          "mood_swings": "Mudanças de humor",
          "movement_stiffness": "Rigidez no movimento",
          "mucoid_sputum": "Expectoração mucoide",
          "muscle_pain": "Dor muscular",
          "muscle_wasting": "Perda de massa muscular",
          "muscle_weakness": "Fraqueza muscular",
          "nausea": "Náusea",
          "neck_pain": "Dor no pescoço",
          "nodal_skin_eruptions": "Erupção nodal na pele",
          "obesity": "Obesidade",
          "pain_behind_the_eyes": "Dor por trás dos olhos",
          "pain_during_bowel_movements": "Dor durante as evacuações",
          "pain_in_anal_region": "Dor na região anal",
          "painful_walking": "Dor ao caminhar",
          "palpitations": "Palpitações",
          "passage_of_gases": "Passagem de gases",
          "patches_in_throat": "Manchas na garganta",
          "phlegm": "Catarro",
          "polyuria": "Poliúria",
          "prominent_veins_on_calf": "Veias proeminentes na panturrilha",
          "puffy_face_and_eyes": "Rosto e olhos inchados",
          "pus_filled_pimples": "Espinhas cheias de pus",
          "receiving_blood_transfusion": "Recebeu transfusão de sangue",
          "receiving_unsterile_injections": "Recebeu injeção não esterilizada",
          "red_sore_around_nose": "Ferida vermelha ao redor do nariz",
          "red_spots_over_body": "Manchas vermelhas no corpo",
          "redness_of_eyes": "Vermelhidão nos olhos",
          "restlessness": "Inquietação",
          "runny_nose": "Nariz a pingar",
          "rusty_sputum": "Expectoração enferrujada",
          "scurring": "Pressa",
          "shivering": "Tremedeira",
          "silver_like_dusting": "Exposição a prata como poeira",
          "sinus_pressure": "Pressão do seio",
          "skin_peeling": "Descamação da pele",
          "skin_rash": "Erupção cutânea",
          "slurred_speech": "Fala arrastada",
          "small_dents_in_nails": "Pequenas marcas nas unhas",
          "spinning_movements": "Movimentos giratórios",
          "spotting_urination": "Manchando a urina",
          "stiff_neck": "Torcicolo",
          "stomach_bleeding": "Sangramento no estômago",
          "stomach_pain": "Dor de estômago",
          "sunken_eyes": "Olhos fundos",
          "sweating": "Suando",
          "swelled_lymph_nodes": "Gânglios linfáticos inchados",
          "swelling_joints": "Inchaço nas articulações",
          "swelling_of_stomach": "Inchaço no estômago",
          "swollen_blood_vessels": "Vasos sanguíneos inchados",
          "swollen_extremeties": "Extremidades inchadas",
          "swollen_legs": "Pernas inchadas",
          "throat_irritation": "Irritação na garganta",
          "toxic_look": "Aparencia toxica(tifo)",
          "ulcers_on_tongue": "Úlceras na língua",
          "unsteadiness": "Instabilidade",
          "visual_disturbances": "Distúrbios visuais",
          "vomiting": "Vômito",
          "watering_from_eyes": "Olhos lacrimejando",
          "weakness_in_limbs": "Fraqueza nos membros",
          "weakness_of_one_body_side": "Fraqueza de um lado do corpo",
          "weight_gain": "Ganho de peso",
          "weight_loss": "Perda de peso",
          "yellow_crust_ooze": "Lodo de crosta amarela",
          "yellow_urine": "Urina amarelada",
          "yellowing_of_eyes": "Olhos amarelados",
          "yellowish_skin": "Pele amarela"
        }

        let symptomsf = ""

        const splits = this.symptoms.split(/[ ,.:]+/)

        for (const k in splits) {
          const split = splits[k].toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "")
          if (split === "na" || split === "no" || split === "e" || split === "dor" || split === "de" || split === "da" || split === "estou" || split === "com" || split === "ola"  || split === "eu"  || split === "boa"  || split === "bom"  || split === "noite"  || split === "dia"  || split === "tarde") {
            continue
          }
          for (const ks in sintomas) {
            const sintoma = sintomas[ks].toString().toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "")

            if (sintoma.includes(split)) {
              console.log(ks.toString())

              if (symptomsf === "") {
                symptomsf = ks.toString()
              } else {
                symptomsf = symptomsf + "," + ks.toString()
              }
          break
            }
          }
        }

      if (symptomsf === "") {
        return "headache"
      }

      console.log(symptomsf)

        return symptomsf
      }
    },
    predict() {
      if(this.symptoms === "") {
        return
      }
      getAPI
        .get("/disease", {
          params: {
            symptoms: this.findSymptoms()
          }
        })
        .then(response => {
          console.log("Recieved data successfully");
          const obj = JSON.parse(response.data.toString().replaceAll("'", '"'))

          this.APIResult = obj
          this.disease = obj.disease
          this.description = obj.description
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang='sass'>
.title
  max-width: 500px
.span
  display: inline-block
  line-height: 12px
</style>
