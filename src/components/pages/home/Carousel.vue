<template lang="html">
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      v-bind:key="i"
      v-bind:src="item.src"
      transition="fade"
      reverseTransition="fade"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style lang="css">
.carousel {
  border: 4px solid lightgray;
}
</style>
