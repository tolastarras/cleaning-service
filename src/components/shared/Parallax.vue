<template lang="html">
  <v-parallax :src="data.src" v-if="data.src">
    <v-layout column align-center justify-center>
      <h2 class="white--text">{{ data.title }}</h2>
      <h1 class="white--text">{{ data.subtitle }}</h1>
      <v-btn dark color="blue darken-4">SAME SOMETHING</v-btn>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped lang="css">
  .parallax {
    height: 800px;
  }
  .parallax__image {
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0.5;
    transform: translate(0, 500px);
  }
</style>
