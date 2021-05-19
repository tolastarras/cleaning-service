<template>
  <v-content>
    <v-layout column>
      <v-flex xs12>
        <app-carousel :items="items" />
      </v-flex>
    </v-layout>
      <v-layout row justify-center class="cards-content mb-4">
        <v-flex xs12 xl8>
          <v-container>
            <v-layout align-center row wrap>
              <v-flex
                v-for="(card, index) in cards"
                :key="card.title"
                :class="spacing(index)"
                xs12
                lg4
              >
                <card class="mb-4" :card="card" :index="index" :total="cards.length" />
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
  </v-content>
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
    spacing (index) {
      const isSmall = this.$vuetify.breakpoint.smAndDown
      return isSmall ? '' : (index === 0 ? 'pr-2' : (index === 1 ? 'pl-1 pr-1' : 'pl-2'))
    }
  },
  computed: mapState(['items', 'cards', 'documentWidth'])
}
</script>
<style lang="scss" scoped>
.cards-content {
  margin-top: -5rem;
  padding: 0 8em;
}

@media (max-width: 1263px) {
  .cards-content {
    padding: 0 2rem;

    .layout > div {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
}

@media (max-width: 425px) {
  .cards-content {
    padding: 0 1rem;
  }
}
</style>
