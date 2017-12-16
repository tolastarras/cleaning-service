<template lang="html">
  <v-parallax :src="data.src" v-if="data.src">
    <v-layout column align-center justify-center>
      <h2>{{ data.title }}</h2>
      <h1 class="white--text">{{ data.subtitle }}</h1>
      <v-btn @mouseover="handleMouseEnter" @mouseleave="handleMouseLeave" dark color="blue darken-4">SAME SOMETHING <v-icon v-show="showIcon">keyboard_arrow_right</v-icon></v-btn>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  props: ['data'],
  data () {
    return {
      showIcon: false
    }
  },
  methods: {
    handleMouseEnter () {
      this.showIcon = true
    },
    handleMouseLeave () {
      this.showIcon = false
    }
  }
}
</script>

<style scoped lang="css">
h1 {
  font-size: 40px;
}
h2 {
  color: gold;
  text-transform: uppercase;
}
.parallax {
  height: 700px !important;
}
</style>
