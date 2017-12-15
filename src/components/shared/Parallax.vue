<template lang="html">
  <v-parallax :src="data.src" v-if="data.src">
    <v-layout column align-center justify-center>
      <h1 class="white--text">{{ data.title }}</h1>
      <h4 class="white--text">{{ data.subtitle }}</h4>
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
    /*width: 100%;*/
    height: 600px;
  }
</style>
