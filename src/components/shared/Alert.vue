<template lang="html">
  <v-alert
    class="mb-4"
    :icon="icon"
    :color="alert.type"
    dismissible
    outline
    v-model="show"
    transition="fade-transition"
    @click="onClose"
  >
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

<style lang="scss" scoped>
.v-alert {
  font-size: $font-size21 !important;
}
</style>
