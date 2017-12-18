<template>
  <v-container>
    <v-layout column>
      <v-flex xs12>
        <app-carousel :items="items"></app-carousel>
      </v-flex>
    </v-layout>
    <v-layout column class="cards">
      <v-flex xs12>
        <v-container fluid grid-list-md pa-0>
          <v-layout row wrap>
            <v-flex xs12 md4 v-for="(card, index) in cards" :key="card.title">
              <card :card="card" :index="index" :total="cards.length"></card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AppCarousel from './Carousel'
import Card from './Card'
export default {
  name: 'Home',
  components: {
    AppCarousel,
    Card
  },
  data () {
    return {
      items: [
        {src: '/static/carousel/living.jpg', title: 'living space', subtitle: 'Living Area Cleaning, Installation and Restoration'},
        {src: '/static/carousel/kitchen.jpg', title: 'kitchen space', subtitle: 'Kitchen Cleaning, Installation and Restoration'},
        {src: '/static/carousel/bedroom.jpg', title: 'bedroom space', subtitle: 'Bedroom Cleaning, Installation and Restoration'},
        {src: '/static/carousel/bathroom.jpg', title: 'bathroom space', subtitle: 'Bathroom Cleaning, Installation and Restoration'}
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
  position: absolute;
  top: 0;
  left: 0;
}
.cards {
   margin-top: 38em;
}
</style>
