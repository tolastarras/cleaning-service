<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm7>
        <contact-info title="Contact Us" :contact="contact"></contact-info>
        <contact-form></contact-form>
      </v-flex>
      <v-flex xs12 sm5 mt-3>
        <v-card-media :src="src" :height="400"></v-card-media>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ContactInfo from '@/components/shared/ContactInfo'
import ContactForm from '@/components/shared/ContactForm'
export default {
  components: {
    ContactForm,
    ContactInfo
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
