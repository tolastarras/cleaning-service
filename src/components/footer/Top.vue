<template lang="html">
  <v-footer :fixed="false" color="white--text">
    <v-container>
      <v-layout row wrap>
        <v-flex v-show="showAbout" class="contact-info" xs12 md4>
          <h2 class="blue--text">About Us</h2>
          <div v-html="business.about.html"></div>
          <router-link to="/about">(read more ...)</router-link>
        </v-flex>
        <v-flex v-show="!showContact || !showAbout" class="contact-info services" xs12 md4>
          <h2 class="blue--text">Services</h2>
          <div v-html="business.service.html"></div>
        </v-flex>
        <v-flex v-show="showContact" class="contact-info contact-us" xs12 md4 d-block>
          <h2 class="blue--text">Contact Us</h2>
          <div>
            <v-icon class="icon-phone" dark small>fa-phone</v-icon> {{ business.phone }}
          </div>
          <div>
            <v-icon class="icon-email" dark small>fa-envelope-o</v-icon> {{ business.email }}
          </div>
          <div>
            <v-icon class="icon-address" dark small>fa-map-marker</v-icon> {{ business.address }}
          </div>
        </v-flex>
        <v-flex class="contact-info" xs12 md4>
          <h2 class="blue--text">Hours</h2>
          <div v-html="business.hours"></div>
          <v-icon class="icon-clock" dark large>fa-clock-o</v-icon>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>

export default {
  props: ['business'],
  computed: {
    // hide contact footer info when in the contact page
    showContact () {
      return this.getPage(this.$route.path) !== 'contact'
    },
    // hide about info when in about page
    showAbout () {
      return this.getPage(this.$route.path) !== 'about'
    }
  }
}
</script>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

a:hover {
  color: gold;
}
.footer {
  padding: 2em !important;
  background-color: #222 !important;
  box-sizing: border-box;
}
.contact-info {
  position: relative;
  line-height: 1.6em;
  font-size: 1.1em;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 200;
  padding-right: 2em;
}
.contact-info > h2 {
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  padding: .4em 0;
  margin-bottom: 1em;
  color: gold !important;
  border-bottom: 1px solid grey;
  width: 100% !important;
}
.contact-info:last-child {
  padding-left: 2em;
  padding-right: 0;
}
.contact-us, .services {
  padding-right: 1em;
  padding-left: 1em;
}
.icon-clock {
  display: none;
}
.contact-info:last-child {
  margin-right: 0;
}
.container {
  margin: 0 auto !important;
  max-width: 1200px;
}
.icon {
  width: 1.2em;
  text-align: center;
  margin-right: .2em;
}
/* media queries */
@media (max-width: 415px) {
  .footer {
    padding: .5em !important;
  }
}
@media (max-width: 959px) {
  h2 {
    text-align: left;
    margin-left: 0;
    width: 100% !important;
  }
  .contact-info {
    margin: 0;
    padding: 0;
  }
  .contact-info:last-child {
    padding-left: 0;
  }
  .contact-us, .services {
    padding: 1.6em 0;
  }
}
</style>
