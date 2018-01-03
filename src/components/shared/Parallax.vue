<template lang="html">
  <v-parallax :style="parallaxHeight" :src="data.src" v-if="data.src">
    <v-layout column align-center justify-center text-xs-center>
      <div class="parallax-content_">
        <h2 class="pl-5 pr-5">{{ data.title }}</h2>
        <h1 class="white--text pl-5 pr-5">{{ data.subtitle }}</h1>
      </div>
      <v-btn @mouseover="handleMouseEnter" @mouseleave="handleMouseLeave" @click="bookNow" dark outline white--text>
        Get a Free Quote<v-icon v-show="showIcon">keyboard_arrow_right</v-icon>
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

<style scoped lang="css">
h1 {
  font-size: 4em;
  text-transform: uppercase;
  padding: 0;
}
h2 {
  color: gold;
  font-size: 3em;
  text-transform: uppercase;
}
.parallax-content {
  border: 1px solid white;
  width: 70%;
  padding: 4em 0;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
}
@media screen and (max-width: 900px) {
  h1 {
    font-size: 1.8em;
  }
  h2 {
    margin-top: 3.5em;
    font-size: 1.5em;
  }
}
</style>
