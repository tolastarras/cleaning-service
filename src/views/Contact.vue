<template lang="html">
  <v-container class="contact my-4">
    <v-layout row wrap>
      <h1 class="text-xs-left display-2 primary-title">Contact Us</h1>
      <v-flex xs12 lg5>
        <v-layout row wrap>
          <v-flex xs12>
            <v-list class="contact-info-list">
              <v-list-tile v-for="(contact, i) in contactMethods" :key="i" router :to="contact.link">
                <v-list-tile-avatar>
                  <v-icon>{{ contact.icon }}</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title :class="contact.icon" v-html="contact.title"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 lg7 class="message-form">
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
import { mapGetters } from 'vuex'
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
  computed: mapGetters(['contactMethods'])
}
</script>

<style lang="scss" scoped>
@import '@/styles/views/_contact.scss';
</style>
