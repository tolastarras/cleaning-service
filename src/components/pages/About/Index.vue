<template lang="html">
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card flat light class="mb-3">
          <v-card-text class="pb-3">
            <h1 class="text-xs-left display-2 bottom-line">Serving your area</h1>
            <img :src="src" :alt="business.name" align="right"/>

            <p>Since we started, we've attracted a loyal clientele based our exceptional customer service. Our customers range from stay-at-home mothers in need of a breather to office dwelling professionals with a little time to spare. With a full range of cleaning services, {{ business.city }} based {{ business.name }} offers clients a chance to sit back and relax with professional cleaners taking over their chores.</p>

            <p>We need to be aware how our actions impact others and the Earth. Even little things can mean a lot. When it comes to cleaning services, {{ business.city }} families can avoid the negative effects of harsh chemicals by choosing green cleaning methods. We assure our clients that the housekeepers referred by our agency provide quality cleaning services while using non-toxic products.</p>

            <p>The house cleaners we refer opt for environment-friendly ways of cleaning so you never have to worry about dangerous chemicals that may risk your family's health.</p>

            <p>Most cleaning products on the market contain chemical substances that are harmful for you and your family. Doesn't it make sense to clean your home only with the safest products?</p>

            <p>The housekeepers perform an eco-friendly cleaning that's good for your home and family, themselves, and the Earth. Many clients are switching to environmentally safe, effective cleaners to improve the health of their families. Why put your family's health at risk from chemicals that other conventional cleaners use.</p>

            <p>At {{ business.name }}, we always keep in mind the health and wellness of your family. We do not only refer cleaners to clean your space, but we also make sure that they do it in the safest way possible. When it comes to green cleaning services, {{ business.city }}'s {{ business.name }} is the one to call.</p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-layout row wrap>
          <v-flex order-xs3 text-xs-center>
            <v-card flat light>
              <contact-form :quote="true"></contact-form>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 md6>
        <v-layout row wrap>
          <v-flex order-xs4>
            <v-card class="testimonials" flat light>
              <testimonial title="Clients comments!"></testimonial>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
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
      src: require('@/assets/about.png'),
      business: this.$store.getters.business
    }
  }
}
</script>

<style scoped lang="css">
h1 {
  margin: 0;
  width: 100% !important;
  font-weight: bold;
}
img {
   margin-left: 5em !important;
   margin-bottom: 1em;
   margin: 0 auto;
}
.card__text {
  padding: 0;
}
@media (max-width: 960px) {
  h1 {
    padding-bottom: 0;
    margin: 0;
    /* width: 100%; */
  }
  img {
    margin-left: 0;
    width: 100%;
    margin-bottom: 2em;
  }
  .testimonials {
    padding-top: 2em;
    padding-bottom: 1em;
  }
}
</style>
