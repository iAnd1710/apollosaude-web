<template>
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
        nodalSkinEruptions: '',
        continuousSneezing: '',
        shivering: '',
        chills: '',
        jointPain: '',
        stomachPain: '',
        acidity: '',
        ulcersOnTongue: '',
        muscleWasting: '',
        vomiting: '',
        burningMicturition: '',
        spottingUrination: '',
        fatique: '',
        weightGain: '',
        anxiety: '',
        coldHandsAndFeets: '',
        moodSwings: '',
        weightLoss: '',
        restlessness: '',
        lethargy: '',
        patchesInThroat: '',
        irregularSugarLevel: '',
        cough: '',
        highFever: '',
        sunkenEyes: '',
        breathlessness: '',
        sweating: '',
        dehydration: '',
        indigestion: '',
        headache: '',
        yellowishSkin: '',
        darkUrine: '',
        nausea: '',
        lossOfAppetite: '',
        painBehindTheEyes: '',
        constipation: '',
        abdominalPain: '',
        diarrhoea: '',
        mildFever: '',
        yellowUrine: '',
        yellowingOfEyes: '',
        acuteLiverFailure: '',
        fluidOverLoad: '',
        swellingOfStomach: '',
        swelledLymphNodes: '',
        malaise: '',
        blurredAndDistortedVision: '',
        phlegm: '',
        throatIrritation: '',
        rednessOfEyes: '',
        sinusPressure: '',
        runnyNose: '',
        congestion: '',
        chestPain: '',
        weaknessInLimbs: '',
        fastHeartRate: '',
        painDuringBowelMovements: '',
        painInAnalRegion: '',
        bloodyStool: '',
        irritationInAnus: '',
        neckPain: '',
        dizziness: '',
        cramps: '',
        bruising: '',
        obesity: '',
        swollenLegs: '',
        swollenBloodVessels: '',
        puffyFaceAndEyes: '',
        enlargedThyroid: '',
        brittleNails: '',
        swollenExtremeties: '',
        excessiveHunger: '',
        extraMaritalContacts: '',
        dryingAndTinglingLips: '',
        slurredSpeech: '',
        kneePain: '',
        hipJointPain: '',
        muscleWeakness: '',
        stiffNeck: '',
        swellingJoints: '',
        movementStiffness: '',
        spinningMovements: '',
        lossOfBalance: '',
        unsteadiness: '',
        weaknessOfOneBodySide: '',
        lossOfSmell: '',
        bladderDiscomfort: '',
        foulSmellOfUrine: '',
        continuousFeelOfUrine: '',
        passageOfGases: '',
        internalItching: '',
        toxicLook: '',
        depression: '',
        irritability: '',
        musclePain: '',
        alteredSensorium: '',
        redSpotsOverBody: '',
        bellyPain: '',
        abnormalMenstruation: '',
        dischromicPatches: '',
        wateringFromEyes: '',
        increasedAppetite: '',
        polyuria: '',
        familyHistory: '',
        mucoidSputum: '',
        rustySputum: '',
        lackOfConcentration: '',
        visualDisturbances: '',
        receivingBloodTransfusion: '',
        receivingUnsterileInjections: '',
        coma: '',
        stomachBleeding: '',
        distentionOfAbdomen: '',
        historyOfAlcoholConsumption: '',
        fluidOverload: '',
        bloodInSputum: '',
        prominentVeinsOnCalf: '',
        palpitations: '',
        painfulWalking: '',
        pusFilledPimples: '',
        blackheads: '',
        scurring: '',
        skinPeeling: '',
        silverLikeDusting: '',
        smallDentsInNails: '',
        inflammatoryNails: '',
        blister: '',
        redSoreAroundNose: '',
        yellowCrustOoze: '',
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
.title
  max-width: 500px
.span
  display: inline-block
  line-height: 12px
</style>