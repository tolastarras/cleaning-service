<template lang="html">
  <v-container fluid grid-list-md>
    <v-parallax src="/static/carousel/kitchen.webp" height="300">
      <v-layout column align-center justify-center>
        <h1 class="blue--text">We want to hear from you!</h1>
        <h1 class="display-1 white--text">Give us a call, email us or use our quoting form!</h1>
        <v-btn dark color="blue">Get a quote</v-btn>
      </v-layout>
    </v-parallax>
    <v-layout row wrap>
      <v-flex xs12 md7>
        <v-layout row wrap>
          <v-flex text-xs-center pt-4 pb-2>
            <v-card flat light>
              <v-card-text>
                <contact-form title="Send us a Message"></contact-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 md5>
        <v-layout row wrap>
          <v-flex d-flex xs12 pl-4 pt-4>
            <v-card flat light>
              <v-card-media :src="src" height="400"></v-card-media>
            </v-card>
          </v-flex>
        </v-layout>
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
.parallax__content {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
