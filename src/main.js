import Vue from 'vue'
import './plugins/vuetify'

import App from './App.vue'
import router from './router'
import store from './store'
import helper from './mixins/helper'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mixins: [helper],
  render: h => h(App)
}).$mount('#app')
