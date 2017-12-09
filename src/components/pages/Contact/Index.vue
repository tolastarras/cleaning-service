<template lang="html">
  <v-container>
    <h1 class="display-1 pb-4 blue--text">Contact Us</h1>
    <v-layout row wrap>
      <v-flex xs12 sm6 order-xs1>
        <p v-html="contact.address"></p>
        <span>Email: {{contact.email}}</span>
        <p>Phone: {{contact.phone}}</p>
      </v-flex>
      <v-flex xs12 sm6 order-xs2 order-sm3>
        <contact-form></contact-form>
      </v-flex>
      <v-flex xs12 sm6 order-xs3 order-sm2>
        <v-card-media :src="src" :height="500"></v-card-media>
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
    contact: {
      address: '500 Terry Francois Street, 6th Floor <br>San Francisco, CA 94158',
      city: 'San Francisco',
      state: 'CA',
      zip: '94158',
      phone: '786-212-3780',
      email: 'evevides@gmail.com'
    }
  })
}
</script>

<style lang="css">
</style>
