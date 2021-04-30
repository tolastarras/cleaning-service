<template lang="html">
  <v-carousel :height="700" hide-delimiters :cycle="cycle" :interval="10000">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="carouselImage(item.name)"
      @mouseover="handleMouseOver"
      @mouseout="handleMouseOut"
    >
      <carousel-content :item="item" />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import CarouselContent from './CarouselContent'

export default {
  name: 'Carousel',
  data () {
    return {
      cycle: true
    }
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  components: {
    CarouselContent
  },
  methods: {
    handleMouseOver () {
      this.cycle = false
    },
    handleMouseOut () {
      this.cycle = true
    },
    carouselImage (name) {
      const ext = this.$vuetify.breakpoint.smAndDown ? '_mobile.jpg' : '.webp'
      return require(`@/assets/carousel/${name}${ext}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 1024px) {
  .v-carousel {
    height: 40rem !important;
  }
}

@media (max-width: 425px) {
  .v-carousel {
    height: 30rem !important;
  }
}
</style>
