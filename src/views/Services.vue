<template lang="html">
  <v-container class="services my-4" grid-list-xl>
    <h1 class="text-xs-left display-2 primary-title font-weight-bold">
      Cleaning Services
    </h1>
    <client-services :services="services" />
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import ClientServices from '@/components/services/ClientServices'

export default {
  name: 'Services',
  components: {
    ClientServices
  },
  computed: {
    ...mapState(['services'])
  }
}
</script>
