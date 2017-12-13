<template lang="html">
  <v-alert class="mb-4" outline icon="check_circle" color="success" dismissible @click="onClose" :value="alert">
    {{ text }}
  </v-alert>
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {
      alert: true
    }
  },
  methods: {
    onClose () {
      this.alert = false
    }
  }
}
</script>

<style lang="css">
.application a {
  color: #4caf50;
}
.alert > div {
  font-size: 1.4em;
}
</style>
