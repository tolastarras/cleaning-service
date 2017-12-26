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
        {
          src: require('@/assets/carousel/living.jpg'),
          title: 'Home',
          subtitle: 'Specialized Cleaning'
        },
        {
          src: require('@/assets/carousel/kitchen.jpg'),
          title: 'Kitchens',
          subtitle: 'Consistency & Detail'
        },
        {
          src: require('@/assets/carousel/bedroom.jpg'),
          title: 'General & Deep Cleaning',
          subtitle: 'Outstanding Cleaning Services With Flat Rate Pricing. No Hidden Fees and No Surprises'
        },
        {
          src: require('@/assets/carousel/office_1280x960.jpg'),
          title: 'Business Offices',
          subtitle: 'Bathroom Cleaning, Installation and Restoration'
        }
      ],
      cards: [
        {
          title: 'Quality Cleaning',
          src: require('@/assets/card/sink.jpg'),
          flex: 4,
          content: 'We deliver happiness through home cleaning and other home and commercial services in Miami. We offer simple flat rate pricing for home cleaning services based on the size of the home given the number of bedrooms. Our home cleaning services come with a satisfaction guarantee and our professional team works hard to provide each and every customer with the very best cleaning services Miami has to offer.'
        },
        {
          title: 'Professional Staff',
          src: require('@/assets/card/mirror.jpg'),
          flex: 4,
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
          title: 'Affordable Rates',
          src: require('@/assets/card/save.jpg'),
          flex: 4,
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        }
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
