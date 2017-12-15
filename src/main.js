// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'

// components
import App from './App'
import Alert from './components/shared/Alert'
import Parallax from './components/shared/Parallax'

import router from './router'
import {store} from './store'

import data from './data'

import 'vuetify/dist/vuetify.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(Vuetify)

// register components
Vue.component('app-alert', Alert)
Vue.component('parallax', Parallax)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    this.$store.dispatch('fetchData', data)
  }
})
