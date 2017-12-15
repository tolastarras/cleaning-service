<template lang="html">
  <v-content>
    <v-container style="width:1200px;" fluid grid-list-md>
      <h1 class="display-1 pb-4 blue--text">About Us</h1>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-layout row wrap>
            <v-flex mb-4 order-xs1>
              <v-card flat light>
                <v-card-text class="grey lighten-4" pa-0 ma-0 style="border: 2px solid red;">
                  <h1 class="display-1">Serving the {{business.serving}} Area Since {{business.since}}</h1>
                  <p>We are a professional team of women specialized in offering general maintenance in what you need. We adapt our cleaning services to meet your needs at the best market price.</p>

                  <p>Since we started, we've attracted a loyal clientele based our exceptional customer service. Our customers range from stay-at-home mothers in need of a breather to office dwelling professionals with a little time to spare. With a full range of cleaning services, {{business.city}} based {{business.name}} offers clients a chance to sit back and relax with professional cleaners taking over their chores.</p>

                  <p>We need to be aware how our actions impact others and the Earth. Even little things can mean a lot. When it comes to cleaning services, {{business.city}} families can avoid the negative effects of harsh chemicals by choosing green cleaning methods. We assure our clients that the housekeepers referred by our agency provide quality cleaning services while using non-toxic products.</p>

                  <p>The house cleaners we refer opt for environment-friendly ways of cleaning so you never have to worry about dangerous chemicals that may risk your family's health.</p>

                  <p>Most cleaning products on the market contain chemical substances that are harmful for you and your family. Doesn't it make sense to clean your home only with the safest products?</p>

                  <p>The housekeepers perform an eco-friendly cleaning that's good for your home and family, themselves, and the Earth. Many clients are switching to environmentally safe, effective cleaners to improve the health of their families. Why put your family's health at risk from chemicals that other conventional cleaners use.</p>

                  <p>At {{business.name}}, we always keep in mind the health and wellness of your family. We do not only refer cleaners to clean your space, but we also make sure that they do it in the safest way possible. When it comes to green cleaning services, {{business.city}}'s {{business.name}} is the one to call.</p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex order-xs3 text-xs-center pb-4>
              <v-card flat light>
                <v-card-text>
                  <contact-form title="Get a Free Quote"></contact-form>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 md6>
          <v-layout row wrap>
            <v-flex d-flex xs12 pl-4 pb-5 order-x2>
              <v-card flat light>
                <v-card-media :src="src" height="600"></v-card-media>
              </v-card>
            </v-flex>
            <v-flex order-xs4 pl-4 pb-0>
              <v-card flat light>
                <testimonial title="Our clients comments!"></testimonial>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import ContactForm from '@/components/shared/ContactForm'
import Testimonial from './Testimonial'
export default {
  components: {
    ContactForm,
    Testimonial
  },
  data () {
    return {
      src: '/static/content/about.png',
      business: this.$store.getters.business
    }
  }
}
</script>

<style lang="css">
</style>
