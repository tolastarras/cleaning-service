<template lang="html">
  <v-container>
    <h1 class="display-2 bottom-line">Cleaning Services</h1>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="(card, i) in services" :key="i">
        <v-card class="my-3" :style="{'margin-right': marginRight(i)}" hover @mouseover="toggle(card)" @mouseout="toggle(card)">
          <transition name="slide">
            <div>
              <v-card-media v-show="card.show" :src="getCardImage(card.src)"></v-card-media>
              <v-card-title>
                <div class="card-content text-xs-left">
                  <div class="headline pt-4 text-xs-center">{{ card.title }}</div>
                  <p class="pt-4 text-xs-center">{{ card.price }}</p>
                  <v-card-text v-show="!card.show" v-html="card.description"></v-card-text>
                </div>
              </v-card-title>
            </div>
          </transition>
          <v-card-actions>
            <v-btn dark outline color="blue" @click="bookNow(card.title)">Book Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  // src: require('@/assets/content/upholstery-cleaning.jpg'),
  data () {
    return {
      services: this.$store.getters.services
    }
  },
  methods: {
    bookNow (title) {
      // find out which button was clicked to prefill the message area with text
      this.$router.push({name: 'Contact', params: { service: title, quote: true }})
    },
    toggle (card) {
      card.show = !card.show
    },
    marginRight (index) {
      let cardsPerLine = 3
      let width = this.$store.getters.documentWidth
      if (width < 600) {
        cardsPerLine = 1
      } else if (width < 960) {
        cardsPerLine = 2
      }
      return (index + 1) % cardsPerLine === 0 ? '0' : '2em'
    }
  }
}
</script>

<style scoped lang="css">
.card__media, .card__text {
  height: 200px !important;
}
.card-content {
  width: 100%;
}
.btn {
  margin: 0 auto !important;
  margin-bottom: 2em !important;
}
</style>
