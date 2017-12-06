<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 pr-2 pb-2 v-for="card in cards" :key="card.title">
        <v-card>
          <v-card-media
            class="white--text"
            height="300px"
            :src="card.src"
          >
          </v-card-media>
          <v-card-title>
            <div class="text-xs-center">
              <span class="headline grey--text">{{card.title}}</span><br>
              <p class="pa-4">1hr | $20.00</p>
              <p>Describe your service here. What makes it great? Use short catchy text to tell people what you offer, and the benefits they will receive. A great description gets readers in the mood, and makes them more likely to go ahead and book.</p>
            </div>
          </v-card-title>
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
      { title: 'House Cleaning', src: '/static/pages/house-cleaning.jpg' },
      { title: 'Carpet Cleaning', src: '/static/pages/carpet-cleaning.jpg' },
      { title: 'After Party Cleaning', src: '/static/pages/after-party-cleaning.jpg' },
      { title: 'Bedroom Cleaning', src: '/static/pages/bedroom-cleaning.jpg' },
      { title: 'Move In/Out Cleaning', src: '/static/pages/move-in-move-out-cleaning.jpg' },
      { title: 'Upholstery Cleaning', src: '/static/pages/house-cleaning.jpg' }
    ]
  })
}
</script>

<style lang="css">
</style>
