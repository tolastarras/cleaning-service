<template lang="html">
  <div class="all-footer">
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
.all-footer {
  position: absolute;
  left: 0;
  right: 0;
}
</style>
