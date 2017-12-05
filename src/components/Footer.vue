<template lang="html">
  <v-footer :fixed="fixed" class="footer">
    <span>&copy; 2017 by {{business}}</span>
    <v-spacer></v-spacer>
    <span>CALL FOR A FREE ESTIMATE {{phone}}</span>
  </v-footer>
</v-container>
</template>

<script>
export default {
  props: ['business', 'phone'],
  data () {
    return {
      fixed: false
    }
  }
}
</script>

<style scoped lang="css">
.footer {
  background: #ddd;
  padding: 2em;
  margin-top: 1em;
}
</style>
