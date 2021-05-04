<template lang="html">
  <v-container fluid>
    <top-footer
      :class="horizontalPadding"
      :business="business"
      :services="services"
      :contact-methods="contactMethods"
    />
    <bottom-footer :class="horizontalPadding" :business="business" />
  </v-container>
</template>

<script>
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
    TopFooter: () => import('./Top'),
    BottomFooter: () => import('./Bottom')
  },
  computed: {
    horizontalPadding () {
      return `px-${this.$vuetify.breakpoint.smAndDown ? 2 : 4}`
    }
  }
}
</script>

<style lang="scss">
.v-container {
  background: $color-10;
  box-sizing: border-box;
}
</style>
