<template lang="html">
  <v-parallax :style="parallaxHeight" :src="data.src" v-if="data.src">
    <v-layout column align-center justify-center text-xs-center>
      <div class="parallax-content">
        <h2>{{ data.title }}</h2>
        <h1 class="white--text">{{ data.subtitle }}</h1>
      </div>
      <v-btn v-show="data.btnText" @mouseover="handleMouseEnter" @mouseleave="handleMouseLeave" @click="bookNow" dark outline>
        {{ data.btnText }} <v-icon v-show="showIcon">keyboard_arrow_right</v-icon>
      </v-btn>
    </v-layout>
  </v-parallax>
</template>

<script>
import { MEDIUM } from '@/config'
export default {
  props: ['data'],
  data () {
    return {
      showIcon: false,
      windowSize: this.$store.getters.documentWidth
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
      this.windowSize = this.$store.getters.documentWidth
    },
    bookNow () {
      this.$router.push({name: 'Contact', params: { quote: true }})
    }
  },
  computed: {
    parallaxHeight () {
      if (this.$store.getters.documentWidth > MEDIUM) {
        // return 'height: 700px !important'
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

<style scoped lang="css">
h1 {
  font-size: 4em;
  text-transform: uppercase;
  width: 90vh;
  padding: 0 2em;
}
h2 {
  color: gold;
  font-size: 3em;
  text-transform: uppercase;
  width: 90vh;
  padding: 0 2em;
}
.btn {
  margin-top: 1em;
  font-size: 1.4em;
}
.parallax-content {
  padding: 4em 2em;
  max-width: 1200px;
}
/* media queries */
@media (max-width: 599px) {
  h1, h2 {
    width: 70vmin !important;
    padding: 0;
    margin: 0 auto;
    text-align: center;
  }
  h2 {
    padding: 2em 0 .5em 0;
  }
  .parallax {
    height: 26em !important;
  }
}
@media only screen and (max-width: 900px) {
  h1 {
    font-size: 1.8em;
    width: 60vh;
    margin: 0 auto;
  }
  h2 {
    margin-top: 3.5em;
    font-size: 1.5em;
    width: 60vh;
    margin: 0 auto;
  }
}
@media (max-width: 1020px) {
  h2 {
    margin-top: 2em;
  }
}
@media only screen and (min-width: 1020px) {
  .parallax {
    height: 700px !important;
  }
}
</style>
