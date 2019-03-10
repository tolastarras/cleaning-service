<template lang="html">
  <v-footer class="py-4 mt-5" dark height="auto" :fixed="false" color="white--text">
    <v-container>
      <v-layout justify-space-between row>
        <v-flex v-show="!isAboutPage" class="contact-info" xs12 lg4>
          <h2 class="blue--text">About Us</h2>
          <div v-text="business.about.text"></div>
          <router-link to="about">(read more ...)</router-link>
        </v-flex>
        <v-flex v-show="!isContactPage" class="contact-info" xs12 lg4>
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
        <v-flex v-show="!isServicesPage" class="contact-info" xs12 sm4>
          <h2 class="blue--text">Services</h2>
          <div v-text="business.service.text"></div>
          <router-link to="services">(read more ...)</router-link>
        </v-flex>
        <v-flex v-show="!isServicesPage && !isHomePage" class="contact-info" xs12 lg4>
          <h2 class="blue--text">Our Services</h2>
          <v-layout row wrap>
            <v-flex text-uppercase class="service-types" xs-6 v-for="service in services" :key="service.id">
              <router-link to="services">{{ service.title }}</router-link>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex v-show="!isContactPage && !isAboutPage && !isHomePage" class="contact-info" xs12 lg4>
          <h2 class="blue--text">Hours</h2>
          <div v-html="business.hours"></div>
          <v-icon class="icon-clock" dark large>fa-clock-o</v-icon>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['business', 'services']),
    // hide contact info when in contact page
    isContactPage () {
      return this.$route.path.substring(1) === 'contact'
    },
    isAboutPage () {
      return this.$route.path.substring(1) === 'about'
    },
    isServicesPage () {
      return this.$route.path.substring(1) === 'services'
    },
    isHomePage () {
      return this.$route.path === '/'
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

footer {
  padding: 2em !important;
  background-color: darken($color3, 3) !important;
  box-sizing: border-box;
}

.contact-info {
  position: relative;
  line-height: 1.6em;
  font-size: 1.1em;
  font-family: Roboto, sans-serif;
  font-weight: 200;
  max-width: 30%;
  justify-content: center;

  > h2 {
    text-transform: uppercase;
    padding: 0.5em 0;
    margin-bottom: 1em;
    color: $color5 !important;
    border-bottom: 1px solid grey;
    width: 100% !important;
  }
}

.service-types {
  width: 50%;
  padding-bottom: 7px;
}

/* media queries */
@media (max-width: 959px) {
  h2 {
    text-align: left;
    margin-left: 0;
    width: 100% !important;
  }

  .contact-info {
    max-width: 100%;
  }
}

@media (max-width: 415px) {
  .footer {
    padding: .5em !important;
  }
}
</style>
