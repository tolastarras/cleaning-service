<template lang="html">
  <v-carousel hide-controls hide-delimiters :cycle="cycle" interval="7000">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" transition="fade" @mouseover="toggle" mouseout="toggle">
    <v-layout class="carousel-content" column align-center justify-center transition="fadeLeft">
      <h1 class="title white--text mb-0 pb-0">{{item.title}}</h1>
      <h2 class="subtitle">{{item.subtitle}}</h2>
    </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: ['items'],
  methods: {
    toggle () {
      // this.cycle = !this.cycle
    }
  },
  data () {
    return {
      cycle: true
    }
  }
}
</script>

<style lang="css">
.carousel {
  height: 700px !important;
}
.carousel-content {
  background-color: rgba(0, 0, 0, 0.3);
  padding: 2em;
  height: 100%;
}
h1.title {
  font-size: 4.5em !important;
  font-weight: bold !important;
  text-transform: uppercase !important;
  text-align: center;
  margin-bottom: .3em !important;
}
h2.subtitle {
  font-size: 2.8em;
  text-align: center;
  color: gold;
  max-width: 1200px;
}
/* media queries */
@media (max-width: 599px) {
  .carousel {
    height: 26em !important;
  }
  .carousel-content {
    padding: 3em;
  }
  h1, h2 {
    width: 70vmin !important;
    margin: 0 auto;
    text-align: center;
  }
  .carousel-content > h1 {
    font-size: 1.8em !important;
    padding: 2.6em 0;
  }
  .carousel-content > h2 {
    font-size: 1.5em;
  }
}
</style>
