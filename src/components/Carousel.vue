<template lang="html">
  <v-carousel :height="700" hide-controls hide-delimiters :cycle="true" touchless interval="7000">
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="require(`@/assets/carousel/${item.image}`)" reverse-transition="fade" transition="fade">
    <v-layout class="carousel-content" justify-center align-center column>
      <h1 class="title white--text mb-0 pb-0">{{item.title}}</h1>
      <h2 class="subtitle">{{item.subtitle}}</h2>
    </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style lang="scss" scoped>
@import '@/styles/components/_carousel.scss';
</style>
