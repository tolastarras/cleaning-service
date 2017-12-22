<template lang="html">
  <v-alert class="mb-4" :icon="icon" :color="alert.type" dismissible outline @click="onClose" v-model="show">
    {{ alert.text }}
  </v-alert>
</template>

<script>
export default {
  props: ['alert'],
  data () {
    return {
      show: true
    }
  },
  methods: {
    onClose () {
      this.alert = false
    }
  },
  computed: {
    icon () {
      return this.alert.type === 'error' ? 'warning' : 'check_circle'
    }
  }
}
</script>

<style scoped lang="css">
.alert.alert--dismissible.alert--outline.error--text {
  font-size: 1.5em !important;
}
</style>
