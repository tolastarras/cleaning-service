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
              <card :card="card" :class="lastCard(index)" :style="spacing(index)" :index="index" :total="cards.length"></card>
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
  methods: {
    lastCard (index) {
      return (index === this.cards.length - 1) ? 'last-card' : ''
    },
    spacing (index) {
      if (index === 0) {
        return 'padding-left: 0;padding-right: 1em;'
      } else if (index === 1) {
        return 'padding-left: .5em;padding-right: .5em;'
      } else if (index === 2) {
        return 'padding-left: 1em; padding-right: 0;'
      }
    }
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
          content: 'Our professional team works hard to provide each and every customer with the very best cleaning service Miami has to offer.'
        },
        {
          title: 'Professional Staff',
          src: require('@/assets/card/mirror.jpg'),
          content: 'We deliver happiness through home cleaning and other home and commercial services. Our cleaning services come with a satisfaction guarantee.'
        },
        {
          title: 'Affordable Rates',
          src: require('@/assets/card/save.jpg'),
          content: 'We offer simple flat rate pricing for home cleaning services based on the size of the home given the number of rooms.'
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
/* media queries */
@media (max-width: 599px) {
  .cards {
    margin-top: 26em;
  }
}
@media (max-width: 959px) {
  .container {
    padding: 0 0 1em 0 !important;
  }
  .last-card {
    padding-bottom: 0 !important;
  }
}
</style>
