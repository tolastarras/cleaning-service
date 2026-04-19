<template>
  <v-content>
    <!-- Hero Carousel Section -->
    <v-layout column>
      <v-flex xs12>
        <app-carousel :items="items" />
      </v-flex>
    </v-layout>

    <!-- Cards Section with Overlap Effect -->
    <v-layout row justify-center class="cards-content mb-5">
      <v-flex xs12 xl8>
        <v-container grid-list-lg>
          <v-layout align-center row wrap>
            <v-flex
              v-for="(card, index) in cards"
              :key="card.title"
              :class="spacing(index)"
              xs12
              lg4
            >
              <card class="mb-4" :card="card" :index="index" :total="cards.length" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>

    <!-- Services Preview Section -->
    <v-container fluid class="services-section py-5">
      <v-container>
        <v-layout row wrap justify-center>
          <v-flex xs12 class="text-xs-center mb-5">
            <v-chip small class="mb-3 pa-3" color="primary" text-color="white">What We Offer</v-chip>
            <h2 class="display-1 font-weight-bold mb-3" style="color: #2c3e50;">
              Professional Cleaning Services
            </h2>
            <p class="subheading grey--text text--darken-1 mx-auto" style="max-width: 600px;">
              We provide top-quality cleaning solutions tailored to your needs
            </p>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex v-for="service in displayedServices" :key="service.id" xs12 sm6 md4 class="pa-3">
            <v-card class="elevation-4 rounded-card" hover>
              <v-img :src="getServiceImage(service.src)" height="200px" class="white--text">
                <v-container fill-height fluid pa-2>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox pa-3>
                      <span class="headline white--text font-weight-bold" v-text="service.title"></span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-card-text class="pt-3">
                <div class="text-xs-center mb-2">
                  <v-chip small color="primary" text-color="white" class="pa-3">{{ service.price }}</v-chip>
                </div>
                <p class="body-2 grey--text text--darken-2 px-3">
                  {{ truncateText(service.description, 100) }}
                </p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="showServiceDetails(service)">Learn More</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout row justify-center class="mt-4">
          <v-flex xs12 class="text-xs-center">
            <v-btn large color="primary" dark @click="viewAllServices">View All Services</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>

    <!-- About Us Section with parallax style -->
    <v-parallax :src="getBackgroundImage('living2')" height="400" class="my-5">
      <v-layout align-center justify-center column fill-height>
        <h1 class="display-2 font-weight-bold white--text text-xs-center mb-3">{{ business.about.title }}</h1>
        <h3 class="subheading white--text text-xs-center mb-4" style="max-width: 600px;">{{ business.about.text }}</h3>
        <v-btn large dark color="accent" @click="scrollToContact">Get a Free Quote</v-btn>
      </v-layout>
    </v-parallax>

    <!-- Business Info / Features Section -->
    <v-container class="py-5">
      <v-layout row wrap py-5>
        <v-flex xs12 md4 class="pa-3 text-xs-center">
          <v-icon x-large color="primary" class="mb-3">verified_user</v-icon>
          <h3 class="title font-weight-bold mb-2">Licensed & Insured</h3>
          <p class="body-2 grey--text">Fully licensed and insured for your peace of mind</p>
        </v-flex>
        <v-flex xs12 md4 class="pa-3 text-xs-center">
          <v-icon x-large color="primary" class="mb-3">schedule</v-icon>
          <h3 class="title font-weight-bold mb-2">Flexible Scheduling</h3>
          <p class="body-2 grey--text">We work around your busy schedule</p>
        </v-flex>
        <v-flex xs12 md4 class="pa-3 text-xs-center">
          <v-icon x-large color="primary" class="mb-3">thumb_up</v-icon>
          <h3 class="title font-weight-bold mb-2">100% Satisfaction</h3>
          <p class="body-2 grey--text">We're not happy until you're completely satisfied</p>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- Testimonials Section -->
    <v-container fluid class="testimonials-section py-5">
      <v-container>
        <v-layout row wrap justify-center>
          <v-flex xs12 class="text-xs-center">
            <v-chip small class="mb-3" color="primary" text-color="white">Testimonials</v-chip>
            <h2 class="display-1 font-weight-bold mb-3">What Our Clients Say</h2>
            <p class="subheading grey--text">Real feedback from real customers</p>
          </v-flex>
        </v-layout>

        <v-layout row wrap py-5>
          <v-flex v-for="(testimonial, index) in testimonials" :key="index" xs12 md4 class="px-3">
            <v-card class="elevation-2" hover>
              <v-card-text class="pa-4">
                <v-icon large color="primary" class="mb-2">format_quote</v-icon>
                <p class="body-1 font-italic mb-3">"{{ testimonial.quote }}"</p>
                <v-divider></v-divider>
                <div class="mt-3">
                  <strong>{{ testimonial.client.name }}</strong>
                  <br>
                  <span class="caption grey--text">{{ testimonial.client.city }}</span>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>

    <!-- Contact / Business Info Section -->
    <v-container class="py-5">
      <v-layout row wrap py-5>
        <v-flex xs12 md6 class="pa-4">
          <h2 class="display-1 font-weight-bold mb-4">Contact Us</h2>
          <p class="subheading mb-4">Ready to schedule your cleaning? Get in touch with us today!</p>

          <v-list three-line class="transparent">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="primary">place</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ business.address.title }}</v-list-tile-title>
                <v-list-tile-sub-title>Visit our location</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="primary">phone</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ business.phone.title }}</v-list-tile-title>
                <v-list-tile-sub-title>Call us anytime</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="primary">mail_outline</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ business.email.title }}</v-list-tile-title>
                <v-list-tile-sub-title>Email us for inquiries</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="primary">access_time</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ formattedHours }}</v-list-tile-title>
                <v-list-tile-sub-title>Business hours</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>

        <v-flex xs12 md6 class="pa-4">
          <v-card class="elevation-4 pa-4">
            <v-card-title class="headline font-weight-bold">Get a Free Quote</v-card-title>
            <v-card-text>
              <v-text-field label="Full Name" outline></v-text-field>
              <v-text-field label="Email Address" outline type="email"></v-text-field>
              <v-text-field label="Phone Number" outline type="tel"></v-text-field>
              <v-select :items="frequencies" label="Service Frequency" outline></v-select>
              <v-textarea label="Additional Details" outline rows="3"></v-textarea>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn large color="primary" dark>Send Message</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapState } from 'vuex'
import AppCarousel from '@/components/carousel/Carousel'
import Card from '@/components/Card'

export default {
  name: 'Home',
  components: {
    AppCarousel,
    Card
  },
  methods: {
    spacing (index) {
      const isSmall = this.$vuetify.breakpoint.smAndDown
      return isSmall ? '' : (index === 0 ? 'pr-2' : (index === 1 ? 'pl-1 pr-1' : 'pl-2'))
    },
    getServiceImage (src) {
      try {
        return require(`@/assets/${src}`)
      } catch (e) {
        return ''
      }
    },
    getBackgroundImage (src) {
      try {
        return require(`@/assets/${src}.jpg`)
      } catch (e) {
        return ''
      }
    },
    truncateText (text, length) {
      if (!text) return ''
      if (text.length <= length) return text
      return text.substring(0, length) + '...'
    },
    showServiceDetails (service) {
      alert(`Service: ${service.title}\n\n${service.description}`)
    },
    viewAllServices () {
      if (this.$router) {
        this.$router.push('/services')
      }
    },
    scrollToContact () {
      const contactSection = document.querySelector('.py-5:has(h2)')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  },
  computed: {
    ...mapState(['items', 'cards', 'documentWidth', 'business', 'services', 'testimonials', 'frequencies']),
    displayedServices () {
      return this.services ? this.services.slice(0, 3) : []
    },
    formattedHours () {
      if (!this.business || !this.business.hours || !this.business.hours.title) {
        return 'Contact us for hours'
      }
      return this.business.hours.title.replace(/<br\s*\/?>/gi, ' • ')
    }
  }
}
</script>

<style lang="scss" scoped>
.cards-content {
  margin-top: -5rem;
  padding: 0 8em;
  position: relative;
  z-index: 10;
}

.rounded-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15) !important;
  }
}

.services-section,
.testimonials-section {
  .v-card {
    transition: all 0.3s ease;
  }
}

@media (max-width: 1263px) {
  .cards-content {
    padding: 0 2rem;

    .layout > div {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
}

@media (max-width: 600px) {
  .cards-content {
    margin-top: -3rem;
  }
}

@media (max-width: 425px) {
  .cards-content {
    padding: 0 1rem;
  }
}
</style>
