<template lang="html">
  <v-carousel hide-controls hide-delimiters :cycle="cycle">
    <v-carousel-item
      v-for="(item,i) in items"
      v-bind:key="i"
      v-bind:src="item.src"
      transition="fade"
      reverseTransition="fade"
      @mouseover="toggle"
      @mouseout="toggle"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: ['items'],
  methods: {
    toggle () {
      this.cycle = !this.cycle
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
</style>
