<template>
  <div id="app">
    <Calculette :msg="'Calculette Viager'"/>
  </div>
</template>

<script>
import Calculette from './components/Calculette.vue'

export default {
  name: 'app',
  components: {
    Calculette
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
