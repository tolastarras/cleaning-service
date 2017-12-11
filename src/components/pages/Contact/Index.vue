<template lang="html">
  <v-container>
    <h1 class="display-1 pb-4 blue--text">Contact Us</h1>
    <v-layout row wrap>
      <v-flex xs12 sm6 order-xs1>
        <p v-html="business.address"></p>
        <span>Email: {{business.email}}</span>
        <p>Phone: {{business.phone}}</p>
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
  data () {
    return {
      src: '/static/pages/flowers.webp',
      business: this.$store.getters.business
    }
  }
}
</script>

<style lang="css">
</style>
