<template lang="html">
  <div class="all-footer">
    <top-footer :business="business"></top-footer>
    <bottom-footer :business="business"></bottom-footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TopFooter from './Top'
import BottomFooter from './Bottom'

export default {
  components: {
    TopFooter,
    BottomFooter
  },
  computed: {
    ...mapState(['business']),
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
