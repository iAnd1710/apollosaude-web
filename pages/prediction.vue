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
              <option value="Acidity" selected>{{ words.acidity }}</option>
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
        acidity: 'Acidez',
        anxiety: 'Ansiedade',
        toxicLook: 'Aparencia toxica(tifo)',
        increasedAppetite: 'Aumento do apetite',
        blister: 'Bolha',
        phlegm: 'Catarro',
        foulSmellOfUrine: 'Cheiro ruim na urina',
	      itching: 'Coceira',
        internalItching: 'Coceira interna',
        cramps: 'Cólicas',
        congestion: 'Congestionamento',
        constipation: 'Constipação',
        continuousFeelOfUrine: 'Constante vontade de urinar',
        extraMaritalContacts: 'Contatos extraconjugais',
        coma: 'Coma',
        blackheads: 'Cravos pretos',
        bladderDiscomfort: 'Desconforto na bexiga',
        depression: 'Depressão',
        skinPeeling: 'Descamação da pele',
        diarrhoea: 'Diarréia',
        distentionOfAbdomen: 'Distensão do abdômen',
        visualDisturbances: 'Distúrbios visuais',
        abdominalPain: 'Dor abdominal',
        painfulWalking: 'Dor ao caminhar',
        headache: 'Dor de cabeça',
        stomachPain: 'Dor de estômago',
        painDuringBowelMovements: 'Dor durante as evacuações',
        musclePain: 'Dor muscular',
        bellyPain: 'Dor na barriga',
        painInAnalRegion: 'Dor na região anal',
        jointPain: 'Dor nas articulações',
        hipJointPain: 'Dor nas articulações do quadril',
        kneePain: 'Dor no joelho',
        chestPain: 'Dor no peito',
        neckPain: 'Dor no pescoço',
        painBehindTheEyes: 'Dor por trás dos olhos',
        skinRash: 'Erupção cutânea',
        nodalSkinEruptions: 'Erupção nodal na pele',
        pusFilledPimples: 'Espinhas cheias de pus',
        continuousSneezing: 'Espirros contínuos',
        fluidOverload: 'Excesso de fluido',
        rustySputum: 'Expectoração enferrujada',
        mucoidSputum: 'Expectoração mucoide',
        silverLikeDusting: 'Exposição a prata como poeira',
        swollenExtremeties: 'Extremidades inchadas',
        fatique: 'Fadiga',
        slurredSpeech: 'Fala arrastada',
        breathlessness: 'Falta de ar',
        lackOfConcentration: 'Falta de concentração',
        highFever: 'Febre alta',
        mildFever: 'Febre amarela',
        redSoreAroundNose: 'Ferida vermelha ao redor do nariz',
        bloodyStool: 'Fezes sangrentas',
        weaknessOfOneBodySide: 'Fraqueza de um lado do corpo',
        weaknessInLimbs: 'Fraqueza nos membros',
        muscleWeakness: 'Fraqueza muscular',
        fastHeartRate: 'Frequência cardíaca rápida',
        excessiveHunger: 'Fome excessiva',
        swelledLymphNodes: 'Gânglios linfáticos inchados',
        weightGain: 'Ganho de peso',
        bruising: 'Hematomas',
        historyOfAlcoholConsumption: 'Histórico de consumo de álcool',
        familyHistory: 'Histórico familiar',
        swellingJoints: 'Inchaço nas articulações',
        swellingOfStomach: 'Inchaço no estômago',
        indigestion: 'indigestão',
        restlessness: 'Inquietação',
        unsteadiness: 'Instabilidade',
        acuteLiverFailure: 'Insuficiência hepática aguda',
        irritability: 'Irritabilidade',
        irritationInAnus: 'Irritação no ânus',
        throatIrritation: 'Irritação na garganta',
        dryingAndTinglingLips: 'Lábios secos e formigando',
        lethargy: 'Letargia',
        yellowCrustOoze: 'Lodo de crosta amarela',
        malaise: 'Mal-estar',
        spottingUrination: 'Manchando a urina',
        patchesInThroat: 'Manchas na garganta',
        redSpotsOverBody: 'Manchas vermelhas no corpo',
        dischromicPatches: 'Manchas discrômicas',
        coldHandsAndFeets: 'Mãos e pés frios',
        abnormalMenstruation: 'Menstruação anormal',
        spinningMovements: 'Movimentos giratórios',
        moodSwings: 'Mudanças de humor',
        runnyNose: 'Nariz a pingar',
        nausea: 'Náusea',
        irregularSugarLevel: 'Nível de açúcar irregular',
        obesity: 'Obesidade',
        yellowingOfEyes: 'Olhos amarelados',
        sunkenEyes: 'Olhos fundos',
        wateringFromEyes: 'Olhos lacrimejando',
        palpitations: 'Palpitações',
        passageOfGases: 'Passagem de gases',
        yellowishSkin: 'Pele amarela',
        smallDentsInNails: 'Pequenas marcas nas unhas',
        lossOfAppetite: 'Perda de apetite',
        muscleWasting: 'Perda de massa muscular',
        lossOfBalance: 'Perda de equilíbrio',
        lossOfSmell: 'Perda de olfato',
        weightLoss: 'Perda de peso',
        swollenLegs: 'Pernas inchadas',
        scurring: 'Pressa',
        sinusPressure: 'Pressão do seio',
        polyuria: 'Poliúria',
        burningMicturition: 'Queima de micção',
        receivingUnsterileInjections: 'Recebeu injeção não esterilizada',
        receivingBloodTransfusion: 'Recebeu transfusão de sangue',
        movementStiffness: 'Rigidez no movimento',
        puffyFaceAndEyes: 'Rosto e olhos inchados',
        stomachBleeding: 'Sangramento no estômago',
        bloodInSputum: 'Sangue na expectoração',
        alteredSensorium: 'Sensorio alterado',
        fluidOverLoad: 'Sobrecarga de fluido',
        sweating: 'Suando',
        enlargedThyroid: 'Tireóide aumentada',
        shivering: 'Tremedeira',
        stiffNeck: 'Torcicolo',
        cough: 'Tosse',
        ulcersOnTongue: 'Úlceras na língua',
        inflammatoryNails: 'Unhas inflamadas',
        brittleNails: 'Unhas quebradiças',
        yellowUrine: 'Urina amarelada',
        darkUrine: 'Urina escura',
        swollenBloodVessels: 'Vasos sanguíneos inchados',
        prominentVeinsOnCalf: 'Veias proeminentes na panturrilha',
        rednessOfEyes: 'Vermelhidão nos olhos',
        blurredAndDistortedVision: 'Visão turva e distorcida',
        vomiting: 'Vômito',
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