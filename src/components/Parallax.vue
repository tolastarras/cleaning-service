<template lang="html">
  <v-parallax :style="parallaxHeight" :src="data.src" v-if="data.src" class="mb-5">
    <v-layout column align-center justify-center text-xs-center>
      <div class="parallax-content">
        <h2 class="display-2 white--text">{{ data.title }}</h2>
        <h1 class="display-3 mb-3">{{ data.subtitle }}</h1>
        <v-btn class="headline" large v-show="data.btnText" @mouseover="handleMouseEnter" @mouseleave="handleMouseLeave" @click="bookNow" dark outline>
          {{ data.btnText }} <v-icon v-show="showIcon">keyboard_arrow_right</v-icon>
        </v-btn>
      </div>
    </v-layout>
  </v-parallax>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['data'],
  data () {
    return {
      showIcon: false,
      windowSize: this.documentWidth
    }
  },
  methods: {
    handleMouseEnter () {
      this.showIcon = true
    },
    handleMouseLeave () {
      this.showIcon = false
    },
    handleResize () {
      this.windowSize = this.documentWidth
    },
    bookNow () {
      this.$router.push({ name: 'Contact', params: { quote: true } })
    }
  },
  computed: {
    ...mapState(['documentWidth']),
    parallaxHeight () {
      if (this.documentWidth > 900) {
        return 'height: 700px !important'
      }
      // default of 500 px
      return null
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/components/_parallax.scss';
</style>
