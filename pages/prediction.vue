<template>
<v-app style="background-color:rgba(0,0,0,0)">
  <div
    class="d-flex flex-column justify-content-center align-items-center"
    style="height: 80vh;"
  >
    <div class="p-0 justify-content-center">
      <h1 class="text-center">Apollo Saúde - Diagnósticos</h1>
      <h2 class="text-center" v-if="!APIResult.length">
        Conte-nos os seus sintomas 
      </h2>
      <h1 class="text-center" v-else style="font-size:1.1em">{{ APIResult }}</h1>
    </div>

    <div class="p-2">
      <form @submit.prevent>
        <div class="form-row" style="max-width:500px">
          <div class="form-group col-12">
            <label for="symptom">Sintoma</label>
            <select
              v-model.trim="diseasedata.symptoms"
              class="form-control"
              id="symptom"
            >
              <option value="Itching" selected>{{ words.itching }}</option>
              <option value="skin_rash" selected></option>
              <option value="nodal_skin_eruptions" selected></option>
              <option value="continuous_sneezing" selected></option>
              <option value="shivering" selected></option>
              <option value="chills" selected></option>
              <option value="joint_pain" selected></option>
              <option value="stomach_pain" selected></option>
              <option value="acidity" selected></option>
              <option value="ulcers_on_tongue" selected></option>
              <option value="muscle_wasting" selected></option>
              <option value="Vomiting" selected></option>
            </select>
          </div>

          <button
            v-on:click="predict"
            @click="predict"
            type="button"
            class="btn btn-primary btn-lg btn-block"
          >
            Confirmar
          </button>
        </div>
      </form>
    </div>
  </div>
</v-app>
</template>

<script>
import { getAPI } from '~/axios';
export default {
  name: "Disease",
  data() {
    return {
      diseasedata: {
        symptoms: []
      },
      APIResult: [],
      words: {
        itching: 'Coceira',
        skinRash: 'Erupção cutânea',
        nodalSkinEruptions: 'Erupção nodal na pele',
        continuousSneezing: 'Espirros contínuos',
        shivering: 'Tremedeira',
        chills: 'Arrepios',
        jointPain: 'Dor nas articulações',
        stomachPain: 'Dor de estômago',
        acidity: 'Acidez',
        ulcersOnTongue: 'úlceras na língua',
        muscleWasting: 'Perda de massa muscular',
        vomiting: 'vômito',
        burningMicturition: 'Queima de micção',
        spottingUrination: 'Manchando a urina',
        fatique: 'Fadiga',
        weightGain: 'Ganho de peso',
        anxiety: 'Ansiedade',
        coldHandsAndFeets: 'Mãos e pés frios',
        moodSwings: 'Mudanças de humor',
        weightLoss: 'Perda de peso',
        restlessness: 'Inquietação',
        lethargy: 'Letargia',
        patchesInThroat: 'Manchas na garganta',
        irregularSugarLevel: 'Nível de açúcar irregular',
        cough: 'Tosse',
        highFever: 'Febre alta',
        sunkenEyes: 'Olhos fundos',
        breathlessness: 'Falta de ar',
        sweating: 'Suando',
        dehydration: 'Desidratação',
        indigestion: 'indigestão',
        headache: 'Dor de cabeça',
        yellowishSkin: 'Pele amarela',
        darkUrine: 'Urina escura',
        nausea: 'Náusea',
        lossOfAppetite: 'Perda de apetite',
        painBehindTheEyes: 'Dor por trás dos olhos',
        constipation: 'Constipação',
        abdominalPain: 'dor abdominal',
        diarrhoea: 'diarréia',
        mildFever: 'Febre amarela',
        yellowUrine: 'Urina amarelada',
        yellowingOfEyes: 'Olhos amarelados',
        acuteLiverFailure: 'Insuficiência hepática aguda',
        fluidOverLoad: 'Sobrecarga de fluido',
        swellingOfStomach: 'Inchaço no estômago',
        swelledLymphNodes: 'Gânglios linfáticos inchados',
        malaise: 'Mal-estar',
        blurredAndDistortedVision: 'Visão turva e distorcida',
        phlegm: 'Catarro',
        throatIrritation: 'Irritação na garganta',
        rednessOfEyes: 'Vermelhidão nos olhos',
        sinusPressure: 'Pressão do seio',
        runnyNose: 'Nariz a pingar',
        congestion: 'Congestionamento',
        chestPain: 'Dor no peito',
        weaknessInLimbs: 'Fraqueza nos membros',
        fastHeartRate: 'Frequência cardíaca rápida',
        painDuringBowelMovements: 'Dor durante as evacuações',
        painInAnalRegion: 'Dor na região anal',
        bloodyStool: 'Fezes sangrentas',
        irritationInAnus: 'Irritação no ânus',
        neckPain: 'Dor no pescoço',
        dizziness: 'Tontura',
        cramps: 'Cólicas',
        bruising: 'Hematomas',
        obesity: 'Obesidade',
        swollenLegs: 'Pernas inchadas',
        swollenBloodVessels: 'Vasos sanguíneos inchados',
        puffyFaceAndEyes: 'Rosto e olhos inchados',
        enlargedThyroid: 'Tireóide aumentada',
        brittleNails: 'Unhas quebradiças',
        swollenExtremeties: 'Extremidades inchadas',
        excessiveHunger: 'Fome excessiva',
        extraMaritalContacts: 'contatos extraconjugais',
        dryingAndTinglingLips: 'Lábios secos e formigando',
        slurredSpeech: 'Fala arrastada',
        kneePain: 'Dor no joelho',
        hipJointPain: 'Dor nas articulações do quadril',
        muscleWeakness: 'Fraqueza muscular',
        stiffNeck: 'Torcicolo',
        swellingJoints: 'Inchaço nas articulações',
        movementStiffness: 'Rigidez no movimento',
        spinningMovements: 'Movimentos giratórios',
        lossOfBalance: 'Perda de equilíbrio',
        unsteadiness: 'Instabilidade',
        weaknessOfOneBodySide: 'Fraqueza de um lado do corpo',
        lossOfSmell: 'Perda de olfato',
        bladderDiscomfort: 'Desconforto na bexiga',
        foulSmellOfUrine: 'Cheiro ruim na urina',
        continuousFeelOfUrine: 'Constante vontade de urinar',
        passageOfGases: 'Passagem de gases',
        internalItching: 'Coceira interna',
        toxicLook: 'Aparencia toxica(tifo)',
        depression: 'Depressão',
        irritability: 'Irritabilidade',
        musclePain: 'Dor muscular',
        alteredSensorium: 'Sensorio alterado',
        redSpotsOverBody: 'Manchas vermelhas no corpo',
        bellyPain: 'Dor na barriga',
        abnormalMenstruation: 'Menstruação anormal',
        dischromicPatches: 'Manchas discrômicas',
        wateringFromEyes: 'Olhos lacrimejando',
        increasedAppetite: 'Aumento do apetit',
        polyuria: 'Poliúria',
        familyHistory: 'História de família',
        mucoidSputum: 'Expectoração mucoide',
        rustySputum: 'Expectoração enferrujada',
        lackOfConcentration: 'Falta de concentração',
        visualDisturbances: 'Distúrbios visuais',
        receivingBloodTransfusion: 'Recebeu transfusão de sangue',
        receivingUnsterileInjections: 'Recebeu injeção não esterilizada',
        coma: 'Coma',
        stomachBleeding: 'Sangramento no estômago',
        distentionOfAbdomen: 'Distensão do abdômen',
        historyOfAlcoholConsumption: 'Histórico de consumo de álcool',
        fluidOverload: 'Excesso de fluido',
        bloodInSputum: 'Sangue na expectoração',
        prominentVeinsOnCalf: 'Veias proeminentes na panturrilha',
        palpitations: 'palpitações',
        painfulWalking: 'Dor ao caminhar',
        pusFilledPimples: 'Espinhas cheias de pus',
        blackheads: 'Cravos pretos',
        scurring: 'Pressa',
        skinPeeling: 'Descamação da pele',
        silverLikeDusting: 'exposição a prata como poeira',
        smallDentsInNails: 'Pequenas marcas nas unhas',
        inflammatoryNails: 'Unhas inflamadas',
        blister: 'Bolha',
        redSoreAroundNose: 'Ferida vermelha ao redor do nariz',
        yellowCrustOoze: 'Lodo de crosta amarela',
      } 
    };
  },
  methods: {
    predict() {
      getAPI
        .get("/disease", {
          params: {
            symptoms: this.diseasedata.symptoms
          }
        })
        .then(response => {
          console.log("Recieved data successfully");
          this.APIResult = response.data;
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
.v-main 
  background: linear-gradient(to right, #663DEF, #E34BE2)
.title
  max-width: 500px
.span
  display: inline-block
  line-height: 12px
</style>