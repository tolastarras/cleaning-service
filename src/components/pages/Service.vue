<template lang="html">
  <v-container>
    <h1 class="display-1 pb-4 blue--text">Services</h1>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 pr-4 pb-4 v-for="card in cards" :key="card.title">
        <v-card class="my-3" hover style="height: 420px" @mouseover="toggle(card)" @mouseout="toggle(card)">
          <transition name="slide">
            <div>
              <v-card-media height="200" v-show="card.show" :src="card.src"></v-card-media>
              <v-card-title>
                <div class="text-xs-center" style="width: 100%">
                  <div class="headline pt-4">{{card.title}}</div>
                  <p class="pt-4">1hr | $20.00</p>
                  <v-card-text v-show="!card.show" style="height: 200px;">
                    Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.
                  </v-card-text>
                </div>
              </v-card-title>
            </div>
          </transition>
          <v-card-actions>
            <v-btn dark color="blue" style="margin: 0 auto">Book Now</v-btn>
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
      { id: 1, title: 'House Cleaning', src: '/static/content/house-cleaning.jpg', show: true },
      { id: 2, title: 'Carpet Cleaning', src: '/static/content/carpet-cleaning.jpg', show: true },
      { id: 3, title: 'After Party Cleaning', src: '/static/content/after-party-cleaning.jpg', show: true },
      { id: 4, title: 'Commercial Cleaning', src: '/static/content/office.jpg', show: true },
      { id: 5, title: 'Move In/Out Cleaning', src: '/static/content/move-in-move-out-cleaning.jpg', show: true },
      { id: 6, title: 'Upholstery Cleaning', src: '/static/content/upholstery-cleaning.jpg', show: true }
    ]
  }),
  methods: {
    toggle (card) {
      card.show = !card.show
    }
  }
}
</script>

<style scoped lang="css">
/*.slide-enter-active, .slide-leave-active {
  transition: all .5s;
  overflow-y: hidden;
}
.slide-enter, .slide-leave-to {
  transform: translateY(300px);
}*/
</style>
