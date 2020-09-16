import Vue from 'vue'
import App from './App.vue'
import Chakra from '@chakra-ui/vue'
import myAwesomeTheme from './assets/themes/my-awesome-theme'

Vue.use(Chakra, {
  extendTheme: myAwesomeTheme
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
