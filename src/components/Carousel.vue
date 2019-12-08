<template lang="html">
  <v-carousel :height="700" hide-delimiters :cycle="cycle" :interval="10000">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="require(`@/assets/carousel/${item.image}`)" @mouseover="handleMouseOver()" @mouseout="handleMouseOut()">
    <v-layout class="carousel-content" justify-center align-center column>
      <h1 class="title white--text text-xs-center font-weight-bold mb-0 pb-0">{{item.title}}</h1>
      <h2 class="subtitle text-xs-center font-weight-medium hidden-sm-and-down">{{item.subtitle}}</h2>
    </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      cycle: true
    }
  },
  props: ['items'],
  methods: {
    handleMouseOver () {
      this.cycle = false
    },
    handleMouseOut () {
      this.cycle = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/components/_carousel.scss';
</style>
