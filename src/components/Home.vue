<template>
  <div class="">
    <v-carousel class="carousel">
      <v-carousel-item
        v-for="(item,i) in items"
        v-bind:key="i"
        v-bind:src="item.src"
        transition="fade"
        reverseTransition="fade"
      ></v-carousel-item>
    </v-carousel>

    <v-layout column>
      <v-flex xs12>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-bind="{ [`xs${card.flex}`]: true }"
              v-for="card in cards"
              :key="card.title"
            >
            <h1 align-end>{{card.title}}</h1>

              <v-card>
                <v-card-media
                  :src="card.src"
                  height="200px"
                >
                </v-card-media>
                <v-card-actions class="white">
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      items: [
        {src: '/static/carousel/kitchen.jpg'},
        {src: '/static/carousel/kitchen.webp'},
        {src: '/static/carousel/bathroom.webp'},
        {src: '/static/carousel/bedroom.webp'}
      ],
      cards: [
        { title: 'Quality Cleaning', src: '/static/card/sink.webp', flex: 4 },
        { title: 'Professional Staff', src: '/static/card/mirror.webp', flex: 4 },
        { title: 'Affordable Rates', src: '/static/card/save.webp', flex: 4 }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
