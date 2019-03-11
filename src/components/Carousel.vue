<template lang="html">
  <v-carousel :height="700" hide-controlsk hide-delimiters :cycle="cycle" interval="7000">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="require(`@/assets/carousel/${item.image}`)" reverse-transition="fade" transition="fade" @mouseover="handleMouseOver()" @mouseout="handleMouseOut()">
    <v-layout class="carousel-content" justify-center align-center column>
      <h1 class="title white--text mb-0 pb-0">{{item.title}}</h1>
      <h2 class="subtitle">{{item.subtitle}}</h2>
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
      console.log('mouse over')
      this.cycle = false
    },
    handleMouseOut () {
      console.log('mouse out')
      this.cycle = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/components/_carousel.scss';
</style>
