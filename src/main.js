import Vue from 'vue'
import './plugins/vuetify'
import './registerServiceWorker'

import App from './App.vue'
import router from './router/index'
import store from './store/index'
import helper from './mixins/helper'

import data from './api/data.json'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mixins: [helper],
  created () {
    this.$store.dispatch('init', data)
  },
  render: h => h(App)
}).$mount('#app')
