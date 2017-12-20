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

Vue.mixin({
  methods: {
    formatTitle: str => {
      let index = str.indexOf(' ')
      let str1 = str.substring(0, index)
      let str2 = str.substring(index + 1)
      // let [str1, str2] = str.split(/\s/)

      return `<b style="letter-spacing: -1px; color: #2196f3">${str1}</b> <span style="color: #555">${str2}</span>`
    }
  }
})

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
