<template>
    <div class="calculette">
        <div class="item" id="input-warper">
            <h1 class="item">{{ msg }}</h1>
            <VueInput v-model="Age" type="number"  class="item" placeholder="Age"/>
            <VueInput v-model="ValeurLogement" type="number" class="item" placeholder="Valeur du logement"/>
            <VueButton @click="calculette"  class="item" label="Calculer"/>
            <VueButton @click="reset" class="item" label="Reset"/>
        </div>
        <div v-if="Bouquet !== null" class="item" id="output-warper">
            <p >Rentre Annuel : {{RenteMensuelle}} euros</p>
            <p>Bouquet : {{Bouquet}} euros</p>
            <p>DUH : {{Duh}} euros</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Calculette',
    components: {
    },
    props: {
      msg: String
    },
    data() {
      return {
        ValeurLogement: null,
        Age: null,
        RenteMensuelle: null,
        Bouquet: null,
        Duh: null
      }
    },
    methods: {
      calculette () {
        this.Duh = this.ValeurLogement/3
        this.Bouquet = this.ValeurLogement / 3
        this.ValeurLogement = 0
      },
      reset () {
        this.ValeurLogement = 0
        this.Age = 0
        this.RenteMensuelle = null
        this.Bouquet = null
        this.Duh = null
      }
    }

  }
</script>

<style scoped>
  .calculette {
      display:flex;
      flex-direction: column;
  }
  #input-warper, #output-warper {
      margin-bottom: 20px;
  }
  #output-warper {
      text-align: left;
  }
  .item {
      width: 300px;
      margin: auto;
  }
</style>
