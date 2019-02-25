<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md5>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card flat light>
              <h1 class="text-xs-left display-2 bottom-line">Contact Us</h1>
              <div class="contact-info">
                <div class="address">
                  <v-icon>fa-map-marker</v-icon>
                  <span v-html="business.address"></span>
                </div>
                <div>
                  <v-icon>fa-phone</v-icon>
                  <span>{{ business.phone }}</span>
                </div>
                <div>
                  <v-icon>fa-envelope-o</v-icon>
                  <span>{{ business.email }}</span>
                </div>
                <div class="hours">
                  <v-icon>fa-clock-o</v-icon>
                  <span v-html="business.hours"></span>
                </div>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 md7 id="quote">
        <v-layout row wrap>
          <v-flex text-xs-center pt-4>
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

<style scoped lang="css">
h1 {
  margin: 0;
  width: 100% !important;
  font-weight: bold;
}
.address {
  line-height: 2.2em;
  width: 100%;
}
.icon {
  vertical-align: top;
  border: 2px solid #daa520;
  color: #daa520 !important;
  border-radius: 5px;
  padding: .5em;
  text-align: center;
  width: 2.3em !important;
  margin-right: .3em;
}
.contact-info {
  font-size: 1.4em;
  color: #daa520;
}
.contact-info > div {
  margin-bottom: .7em;
}
.contact-info > div > span {
  display: inline-block;
  line-height: 2.2em;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  width: 80%;
}
.contact-info > div.hours > span {
  line-height: 1.3em;
}
.card__text {
  padding: 1em 0;
}
@media only screen and (max-width: 499px) {
  .contact-info > div.address > span {
    line-height: 1.2em !important;
  }
}
@media only screen and (min-width: 960px) and (max-width: 1150px) {
  .contact-info > div.address > span {
    line-height: 1.2em !important;
  }
}
</style>
