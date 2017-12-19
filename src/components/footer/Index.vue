<template lang="html">
  <div>
    <top-footer :business="business"></top-footer>
    <bottom-footer :business="business"></bottom-footer>
  </div>
</template>

<script>
import TopFooter from './Top'
import BottomFooter from './Bottom'
export default {
  components: {
    TopFooter,
    BottomFooter
  },
  data () {
    return {
      business: this.$store.getters.business
    }
  },
  computed: {
    phoneLink () {
      return 'tel:' + this.business.phone
    }
  }
}
</script>

<style scoped lang="css">
</style>
