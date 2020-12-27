<template lang="html">
  <v-container fluid>
    <top-footer
      :business="business"
      :services="services"
      :contact-methods="contactMethods"
    />
    <bottom-footer :business="business" />
  </v-container>
</template>

<script>
import TopFooter from '@/components/footer/Top'
import BottomFooter from '@/components/footer/Bottom'

export default {
  name: 'AppFooter',
  props: {
    business: {
      type: Object,
      required: true
    },
    services: {
      type: Array,
      required: true
    },
    contactMethods: {
      type: Array,
      required: true
    }
  },
  components: {
    TopFooter,
    BottomFooter
  }
}
</script>

<style lang="scss">
@import '@/styles/components/_footer.scss';
</style>
