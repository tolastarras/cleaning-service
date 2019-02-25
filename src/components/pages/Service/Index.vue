<template lang="html">
  <v-container fluid grid-list-xl pt-0 pb-0>
    <h1 class="text-xs-left display-2 bottom-line">Cleaning Services</h1>
    <v-layout row wrap class="mt-5">
      <v-flex class="cards-container" xs12 sm6 md4 v-for="(card, i) in services" :key="i">
        <v-card class="my-3" hover>
          <v-card-media :src="getCardImage(card.src)"></v-card-media>
          <v-card-title>
            <div class="card-content text-xs-left">
              <div class="headline text-xs-center" v-html="getTitle(card.title)"></div>
              <p class="py-3 text-xs-center">{{ card.price }}</p>
              <v-card-text v-html="card.description"></v-card-text>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn dark outline color="blue" @click="bookNow(card.title)">Book Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      show: true,
      icon: null
    }
  },
  methods: {
    getTitle (title) {
      return this.$root.formatTitle(title)
    },
    getCardImage: imagePath => {
      return require(`@/assets/content/${imagePath}`)
    },
    bookNow (title) {
      // find out which button was clicked to prefill the message area with text
      this.$router.push({ name: 'Contact', params: { service: title, quote: true } })
    },
    marginRight (index) {
      let cardsPerLine = 3
      let width = this.documentWidth
      if (width < 600) {
        cardsPerLine = 1
      } else if (width < 960) {
        cardsPerLine = 2
      }
      return (index + 1) % cardsPerLine === 0 ? '0' : '2em !important'
    }
  },
  computed: mapState(['services', 'documentWidth'])
}
</script>

<style scoped lang="css">
  .cards-container {
    padding-top: 0 !important;
  }
  .card {
    width: 100%;
    height: 30em !important;
    margin-top: 0 !important;
    position: relative;
    overflow: hidden;
  }
  .card:hover .card__title {
    top: 0;
    transition: top 1s;
  }
  .card__title {
    top: 15em;
    position: absolute;
    width: 100%;
    background: white;
    transition: top 1s;
  }
  .card__media {
    height: 200px !important;
  }
  .card__text {
    height: 4em;
  }
  .card__actions {
    background: white;
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  .headline {
    text-transform: uppercase;
  }
  .card-content > p {
    color: #555;
    font-size: 1.2em;
    text-transform: uppercase;
    font-weight: 500;
  }
  .btn {
    margin: 0 auto !important;
    margin-bottom: 2em !important;
  }
  @media (max-width: 1263px) {
    padding: 0;
  }
</style>
