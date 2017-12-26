<template lang="html">
  <v-parallax :src="data.src" v-if="data.src">
    <v-layout column align-center justify-center text-xs-center>
      <h2 class="pl-5 pr-5">{{ data.title }}</h2>
      <h1 class="white--text pl-5 pr-5">{{ data.subtitle }}</h1>
      <v-btn @mouseover="handleMouseEnter" @mouseleave="handleMouseLeave" dark color="blue darken-4">SAY SOMETHING <v-icon v-show="showIcon">keyboard_arrow_right</v-icon></v-btn>
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
  font-size: 4em;
  /* max-width: 1200px; */
  /* font-weight: normal; */
  text-transform: uppercase;
}
h2 {
  color: gold;
  font-size: 3em;
  /* font-weight: normal; */
  /* max-width: 800px; */
  /* letter-spacing: -1px; */
  text-transform: uppercase;
}
.parallax {
  height: 700px !important;
}
@media screen and (max-width: 600px) {
  h1 {
    font-size: 1.8em;
  }
  h2 {
    margin-top: 3.5em;
    font-size: 1.5em;
  }
}
</style>
