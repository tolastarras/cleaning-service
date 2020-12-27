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
import { mapState, mapGetters } from 'vuex'
import AppHeader from '@/components/header'
import AppFooter from '@/components/footer'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  computed: {
    ...mapState(['business', 'documentWidth', 'parallax', 'services']),
    ...mapGetters(['contactMethods'])
  }
}
</script>
