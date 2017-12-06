<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <h1 class="display-1 blue--text">Contact Us</h1>
        <p>500 Terry Francois Street, 6th Floor<br>San Francisco, CA  94158</p>
        <p>evevides@gmail.com</p>
        <p>{{phone}}</p>
        <contact-form></contact-form>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card-media :src="src" height="500"></v-card-media>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ContactForm from '@/components/shared/ContactForm'
export default {
  components: {
    ContactForm
  },
  data: () => ({
    src: '/static/pages/flowers.webp',
    phone: '786-212-3780'
  })
}
</script>

<style lang="css">
</style>
