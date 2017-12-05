<template>
  <div class="">
    <app-carousel :items="items"></app-carousel>
    <v-layout column>
      <v-flex xs12>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex xs12 sm6 md4 v-for="card in cards" :key="card.title">
              <h1 align-end>{{card.title}}</h1>
              <card :src="card.src"></card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import AppCarousel from '@/components/Carousel'
import Card from '@/components/Card'
export default {
  name: 'Home',
  components: {
    AppCarousel,
    Card
  },
  data () {
    return {
      items: [
        {src: '/static/carousel/kitchen.jpg'},
        {src: '/static/carousel/kitchen.webp'},
        {src: '/static/carousel/bathroom.webp'},
        {src: '/static/carousel/bedroom.webp'}
      ],
      cards: [
        { title: 'Quality Cleaning', src: '/static/card/sink.webp', flex: 4 },
        { title: 'Professional Staff', src: '/static/card/mirror.webp', flex: 4 },
        { title: 'Affordable Rates', src: '/static/card/save.webp', flex: 4 }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
