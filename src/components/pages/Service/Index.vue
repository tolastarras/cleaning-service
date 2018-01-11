<template lang="html">
  <v-container>
    <h1 class="text-xs-left display-2 bottom-line">Cleaning Services</h1>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="(card, i) in services" :key="i">
        <v-card class="my-3" :style="{'margin-right': marginRight(i)}" hover @mouseover="toggle(card)" @mouseout="toggle(card)">
          <transition name="slide">
            <div>
              <!-- <div class="view-text" v-if="showIcon()"><v-icon large dark @click="toggle(card.show)">{{ showIcon(card) }}</v-icon></div> -->
              <v-card-media v-show="card.show" :src="getCardImage(card.src)"></v-card-media>
              <v-card-title>
                <div class="card-content text-xs-left">
                  <div class="headline pt-4 text-xs-center" v-html="getTitle(card.title)"></div>
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
// import device from 'device'
export default {
  data () {
    return {
      icon: null,
      services: this.$store.getters.services
    }
  },
  methods: {
    // isDesktop () {
    //   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //     showIcon = true
    //   }
    //   return true
    // },
    // showIcon (show) {
    //   this.icon.show = this.isDesktop() ? false : true
    //   this.icon.name = show ? 'fa-plus' : 'fa-minus'
    // },
    getTitle (title) {
      return this.formatTitle(title)
    },
    bookNow (title) {
      // find out which button was clicked to prefill the message area with text
      this.$router.push({ name: 'Contact', params: { service: title, quote: true } })
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
h1 {
  margin: 0;
  width: 100% !important;
}
.view-text {
  position: absolute;
  top: .4em;
  right: .4em;
  color: green;
  z-index: 1;
  padding: .3em .8em .4em .8em;
  background: rgba(0, 0, 0, .2);
  border: 2px solid white;
  border-radius: 4px;
}
.card__media, .card__text {
  height: 200px !important;
}
.headline {
  text-transform: uppercase;
}
.card-content {
  width: 100%;
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
</style>
