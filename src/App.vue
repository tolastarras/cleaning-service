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
import AppHeader from '@/components/navigation/header'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter: () => import('@/components/navigation/footer')
  },
  computed: {
    ...mapState(['business', 'documentWidth', 'parallax', 'services']),
    ...mapGetters(['contactMethods'])
  }
}
</script>
