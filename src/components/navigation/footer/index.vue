<template lang="html">
  <v-footer
    height="auto"
    color="blue-grey darken-4"
    class="mt-5"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <top-footer
        :class="horizontalPadding"
        :business="business"
        :services="services"
        :contact-methods="contactMethods"
      />
      <v-flex
        text-xs-center
        white--text
        xs12
      >
        <bottom-footer :class="horizontalPadding" :business="business" />
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
import TopFooter from './Top'
import BottomFooter from './Bottom'

export default {
  name: 'AppFooter',
  data: () => ({
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us'
    ]
  }),
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
