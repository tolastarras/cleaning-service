<template lang="html">
  <v-container>
    <h1 class="display-1">Our Services</h1>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="(card, i) in cards" :key="i">
        <v-card class="my-3" :style="marginRight(i)" hover @mouseover="toggle(card)" @mouseout="toggle(card)">
          <transition name="slide">
            <div>
              <v-card-media v-show="card.show" :src="card.src"></v-card-media>
              <v-card-title>
                <div class="card-content text-xs-center">
                  <div class="headline pt-4">{{card.title}}</div>
                  <p class="pt-4">1hr | $20.00</p>
                  <v-card-text v-show="!card.show">
                    Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.
                  </v-card-text>
                </div>
              </v-card-title>
            </div>
          </transition>
          <v-card-actions>
            <v-btn dark color="blue">Book Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      { id: 1, title: 'House Cleaning', src: require('@/assets/content/house-cleaning.jpg'), show: true },
      { id: 2, title: 'Carpet Cleaning', src: require('@/assets/content/carpet-cleaning.jpg'), show: true },
      { id: 3, title: 'After Party Cleaning', src: require('@/assets/content/after-party-cleaning.jpg'), show: true },
      { id: 4, title: 'Commercial Cleaning', src: require('@/assets/content/office.jpg'), show: true },
      { id: 5, title: 'Move In/Out Cleaning', src: require('@/assets/content/move-in-move-out-cleaning.jpg'), show: true },
      { id: 6, title: 'Upholstery Cleaning', src: require('@/assets/content/upholstery-cleaning.jpg'), show: true }
    ]
  }),
  methods: {
    toggle (card) {
      card.show = !card.show
    },
    marginRight (index) {
      return (index + 1) % 3 === 0 ? 'margin-right: 0' : 'margin-right: 2em'
    }
  }
}
</script>

<style scoped lang="css">
.card {
  /* margin-right: 2em; */
}
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
