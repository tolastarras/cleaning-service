<template>
  <v-container fluid>
    <v-layout column>
      <v-flex xs12>
        <app-carousel :items="items"></app-carousel>
      </v-flex>
    </v-layout>
    <v-layout row justify-center class="cards-content mb-4">
      <v-flex xs12 xl8>
        <v-layout align-center row wrap>
          <v-flex xs12 lg4 :class="spacing(index)" v-for="(card, index) in cards" :key="card.title">
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
<style lang="scss" scoped>
@import '@/styles/views/_home.scss';
</style>
