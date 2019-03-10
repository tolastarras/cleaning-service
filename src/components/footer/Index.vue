<template lang="html">
  <v-container fluid>
    <top-footer></top-footer>
    <bottom-footer></bottom-footer>
  </v-container>
</template>

<script>
import TopFooter from './Top'
import BottomFooter from './Bottom'

export default {
  components: {
    TopFooter,
    BottomFooter
  }
}
</script>

<style lang="scss">
@import '@/styles/components/_footer.scss';
</style>
