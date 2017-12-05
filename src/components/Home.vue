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
        {src: '/static/carousel/bathroom.webp'}
      ],
      cards: [
        { title: 'Pre-fab homes', src: '/static/carousel/kitchen.jpg', flex: 12 },
        { title: 'Favorite road trips', src: '/static/carousel/kitchen.jpg', flex: 6 },
        { title: 'Best airlines', src: '/static/carousel/kitchen.jpg', flex: 6 }
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
