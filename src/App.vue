<template>
  <v-app>
    <app-header />
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppHeader from '@/components/Navigation'
import AppFooter from '@/components/footer/Index'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
