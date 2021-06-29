<template>
  <v-app>
    <app-header
      :business="business"
      :parallax="parallax"
      :document-width="documentWidth"
    />
    <v-content>
      <router-view />
    </v-content>
    <app-footer
      :business="business"
      :services="services"
      :contact-methods="contactMethods"
    />
  </v-app>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import AppHeader from '@/components/navigation/header'
import data from '@/api/data.json'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter: () => import(/* webpackPreload: true */ /* webpackChunkName: "footer" */ '@/components/navigation/footer')
  },
  created () {
    this.init(data)
  },
  computed: {
    ...mapState(['business', 'documentWidth', 'parallax', 'services']),
    ...mapGetters(['contactMethods'])
  },
  methods: {
    ...mapActions(['init'])
  }
}
</script>
