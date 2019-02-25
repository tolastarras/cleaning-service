import Vue from 'vue'
import Vuetify from 'vuetify'

// components
import App from './App'
import Alert from './components/shared/Alert'
import Parallax from './components/shared/Parallax'

import router from './router'
import { store } from './store'
import helper from '@/mixins/helper'

import data from './data'

import 'vuetify/dist/vuetify.css'
import 'font-awesome/css/font-awesome.min.css'
import '@/css/style.css'

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
  mixins: [helper],
  template: '<App/>',
  components: { App },
  methods: {
    handleResize () {
      this.$store.dispatch('changeDocumentWidth', window.innerWidth)
    }
  },
  created () {
    this.$store.dispatch('init', data)
    window.addEventListener('resize', this.handleResize)
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  }
})
