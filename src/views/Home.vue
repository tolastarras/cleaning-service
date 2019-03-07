<template>
  <v-container fluid>
    <v-layout column>
      <v-flex xs12>
        <app-carousel :items="items"></app-carousel>
      </v-flex>
    </v-layout>
    <v-layout row justify-center class="cards-content">
      <v-flex xs12 md8>
        <v-layout align-center row wrap>
          <v-flex xs12 md4 class="" :class="spacing(index)" v-for="(card, index) in cards" :key="card.title">
            <card :card="card" :index="index" :total="cards.length"></card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

import AppCarousel from '@/components/Carousel'
import Card from '@/components/Card'

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
      if (this.documentWidth < 600) {
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
  computed: mapState(['items', 'cards', 'documentWidth'])
}
</script>
<style scoped>
/* .carousel {
  position: absolute;
  top: 0;
  left: 0;
} */

.cards-content {
  margin-top: -5rem;
  padding: 0 8em;
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
