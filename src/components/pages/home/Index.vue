<template>
  <v-container>
    <v-layout column>
      <v-flex xs12>
        <app-carousel :items="items"></app-carousel>
      </v-flex>
    </v-layout>
    <v-layout class="cards-content">
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs12 md4 class="" :class="spacing(index)" v-for="(card, index) in cards" :key="card.title">
            <card :card="card" :index="index" :total="cards.length"></card>
          </v-flex>
        </v-layout>
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
      // small devices padding
      if (this.$store.getters.documentWidth < 600) {
        return ''
      }
      // medium to large devices
      if (index === 0) {
        return 'pr-2'
      } else if (index === 1) {
        return 'pl-1 pr-1'
      } else if (index === 2) {
        return 'pl-2'
      }
    }
  },
  data () {
    return {
      items: [
        {
          src: require('@/assets/carousel/living.jpg'),
          title: 'Home Cleaning',
          subtitle: 'Specialized in General Cleaning'
        },
        {
          src: require('@/assets/carousel/kitchen.jpg'),
          title: 'General & Deep Cleaning Available',
          subtitle: 'Outstanding Cleaning Services With Flat Rate Pricing.'
        },
        {
          src: require('@/assets/carousel/bedroom.jpg'),
          title: 'General & Deep Cleaning Available',
          subtitle: 'Outstanding Cleaning Services With Flat Rate Pricing.'
        },
        {
          src: require('@/assets/carousel/office_1280x960.jpg'),
          title: 'Business and Commercial Cleaning',
          subtitle: 'No Hidden Fees and No Surprises'
        }
      ],
      cards: [
        {
          title: 'Quality Cleaning',
          src: require('@/assets/card/sink.jpg'),
          content: 'Our professional team works hard to provide each and every customer with the very best cleaning service available in the area.'
        },
        {
          title: 'Professional Staff',
          src: require('@/assets/card/mirror.jpg'),
          content: 'We deliver happiness through home, business and commercial cleaning. Our cleaning services come with a satisfaction guarantee.'
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
.cards-content {
   padding-top: 35em;
}
/* media queries */
@media (max-width: 599px) {
  .cards-content {
    padding-top: 26em;
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
