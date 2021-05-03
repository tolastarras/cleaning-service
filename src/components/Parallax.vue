<template lang="html">
  <v-parallax v-if="data.src" :src="data.src" class="mb-5">
    {{ data.src }}
    <v-layout column align-center justify-center text-xs-center>
      <div class="parallax-content">
        <h2 class="display-2 white--text font-weight-bold">
          {{ data.title }}
        </h2>
        <h1 class="display-3 font-weight-medium mb-3 amber--text text--accent-2">
          {{ data.subtitle }}
        </h1>
        <v-btn
          v-show="data.btnText"
          class="headline"
          large
          dark
          outline
          @mouseover="handleMouseEnter"
          @mouseleave="handleMouseLeave"
          @click="bookNow"
        >
          {{ data.btnText }}
          <v-icon v-show="showIcon">keyboard_arrow_right</v-icon>
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
      this.$router.push({ name: 'contact', params: { quote: true } })
    }
  },
  computed: mapState(['documentWidth']),
  created () {
    window.addEventListener('resize', this.handleResize)
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="scss" scoped>
.v-parallax {
  height: 700px !important;
}

h1, h2 {
  max-width: 70%;
  margin: 0 auto;
  line-height: 100% !important;
}

/* media queries */
@media (max-width: 1024px) {
  .v-parallax {
    height: 500px !important;

    .parallax-content {
      > h1 {
        max-width: 600px;
        margin-top: 6rem;
        font-size: $font-48 !important;
        line-height: 3.5rem !important;
      }

      h2 {
        display: none;
      }
    }
  }
}

@media (max-width: 425px) {
  .v-parallax {
    height: 30rem !important;

    .parallax-content > h1 {
      line-height: 2.2rem !important;
      max-width: 300px;
      margin-top: 6rem;
      font-size: $font-28 !important;
    }
  }
}
</style>
