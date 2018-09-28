import Vue from 'vue'
import App from './App.vue'

import VueUi from '@vue/ui'


Vue.config.productionTip = false

Vue.use(VueUi)

import '@vue/ui/dist/vue-ui.css'

new Vue({
  render: h => h(App)
}).$mount('#app')
