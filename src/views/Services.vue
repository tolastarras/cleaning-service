<template lang="html">
  <v-container class="services my-4" grid-list-xl>
    <h1 class="text-xs-left display-2 primary-title font-weight-bold">
      Cleaning Services
    </h1>
    <v-layout row wrap class="mt-5">
      <v-flex
        v-for="(card, i) in services"
        :key="i"
        class="cards-container"
        xs12
        sm6
        md4
      >
        <v-card class="my-3" hover>
          <v-img :src="getCardImage(card.src)"></v-img>
          <v-card-title>
            <div class="card-content text-xs-left">
              <div class="text-xs-center" v-html="getTitle(card.title)"></div>
              <p class="py-3 text-xs-center text-uppercase">{{ card.price }}</p>
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
      this.$router.push({ name: 'contact', params: { service: title, quote: true } })
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

<style lang="scss" scoped>
.cards-container {
  padding-top: 0 !important;
}

.v-card {
  width: 100%;
  height: 30em !important;
  margin-top: 0 !important;
  position: relative;
  overflow: hidden;
}

.v-card:hover .v-card__title {
  top: 0;
  transition: top 1s;
  background: $color-02;
}

.v-card__title {
  top: 15rem;
  position: absolute;
  width: 100%;
  transition: top 1s;
  background: $color-02;
}

.card__media {
  height: 200px !important;
}

.v-card__actions {
  background: $color-02;
  position: absolute;
  width: 100%;
  bottom: 0;
}

.card-content {
  height: 22rem;

  > p {
    color: $color-07;
    font-size: $font-18;
  }
}

.v-btn {
  margin: 0 auto;
  margin-bottom: 1.8em;
  margin-top: 1em;
}
</style>
