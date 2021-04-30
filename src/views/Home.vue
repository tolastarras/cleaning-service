<template>
  <v-container fluid>
    <v-layout column>
      <v-flex xs12>
        <app-carousel :items="items" />
      </v-flex>
    </v-layout>
    <v-layout row justify-center class="cards-content mb-4">
      <v-flex xs12 xl8>
        <v-layout align-center row wrap>
          <v-flex
            v-for="(card, index) in cards"
            :key="card.title"
            :class="spacing(index)"
            xs12
            lg4
          >
            <card :card="card" :index="index" :total="cards.length" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

import AppCarousel from '@/components/carousel/Carousel'
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
<style lang="scss" scoped>
.container {
  max-width: 100%;
}

.cards-content {
  margin-top: -5rem;
  padding: 0 8em;
}

@media (max-width: 1024px) {
  .cards-content {
    padding: 0 2rem;

    .layout > div {
      padding-left: 0 !important;
      padding-right: 0 !important;
      margin-bottom: 0.7rem;
    }
  }
}

@media (max-width: 425px) {
  .cards-content {
    padding: 0 1rem;
  }
}
</style>
