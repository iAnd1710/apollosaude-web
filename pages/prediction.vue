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
              <option value="Itching" selected>Coceira</option>
              <option value="skin_rash" selected>skin_rash</option>
              <option value="nodal_skin_eruptions" selected></option>
              <option value="continuous_sneezing" selected>Espirros contínuos</option>
              <option value="shivering" selected>Tremedeira</option>
              <option value="chills" selected>Arrepios</option>
              <option value="joint_pain" selected>Dores nas articulações</option>
              <option value="stomach_pain" selected>Dor de estômago</option>
              <option value="acidity" selected>Acidez</option>
              <option value="ulcers_on_tongue" selected>Rainy</option>
              <option value="muscle_wasting" selected>Perda de massa muscular</option>
              <option value="Vomiting" selected>Vômito</option>
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
      APIResult: []
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