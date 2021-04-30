<template lang="html">
  <v-layout row wrap class="mt-5">
    <v-flex
      v-for="service in services"
      :key="service.id"
      class="pt-0"
      xs12
      sm6
      md4
    >
      <client-service :service="service" />
    </v-flex>
  </v-layout>
</template>

<script>
import ClientService from './ClientService'

export default {
  name: 'ClientServices',
  props: {
    services: {
      type: Array,
      default: () => []
    }
  },
  components: {
    ClientService
  }
}
</script>
