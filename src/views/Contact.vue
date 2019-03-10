<template lang="html">
  <v-container class="my-4">
    <v-layout row wrap>
      <h1 class="text-xs-left display-2 primary-title">Contact Us</h1>
      <v-flex xs12 md5>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card flat light>
              <div class="contact-info">
                <div class="address">
                  <v-icon>place</v-icon>
                  <span v-html="business.address"></span>
                </div>
                <div>
                  <v-icon>phone</v-icon>
                  <span>{{ business.phone }}</span>
                </div>
                <div>
                  <v-icon>mail_outline</v-icon>
                  <span>{{ business.email }}</span>
                </div>
                <div class="hours">
                  <v-icon>access_time</v-icon>
                  <span v-html="business.hours"></span>
                </div>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 md7 class="message-form">
        <v-layout row wrap>
          <v-flex text-xs-center>
            <v-card flat light>
              <v-card-text>
                <contact-form></contact-form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import ContactForm from '@/components/shared/ContactForm'

export default {
  components: {
    ContactForm
  },
  data () {
    return {
      src: require('@/assets/contact.jpg')
    }
  },
  computed: mapState(['business'])
}
</script>

<style lang="scss" scoped>
@import '@/styles/views/_contact.scss';
</style>
