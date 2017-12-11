<template lang="html">
  <v-container fluid style="align-items:flex-start">
    <h1 class="display-1 pb-4 blue--text">About Us</h1>
    <v-layout row wrap>
      <v-flex xs12 md6 text-xs-left text-sm-left pr-4 mb-5 order-xs1>
        <h2 style="margin-bottom:.8em">Serving the {{business.serving}} Area Since {{business.since}}</h2>
        <p>We are a professional team of women specialized in offering general maintenance in what you need. We adapt our cleaning services to meet your needs at the best market price.</p>

        <p>Since we started, we've attracted a loyal clientele based our exceptional customer service. Our customers range from stay-at-home mothers in need of a breather to office dwelling professionals with a little time to spare. With a full range of cleaning services, {{business.city}} based {{business.name}} offers clients a chance to sit back and relax with professional cleaners taking over their chores.</p>

        <p>We need to be aware how our actions impact others and the Earth. Even little things can mean a lot. When it comes to cleaning services, {{business.city}} families can avoid the negative effects of harsh chemicals by choosing green cleaning methods. We assure our clients that the housekeepers referred by our agency provide quality cleaning services while using non-toxic products. The house cleaners we refer opt for environment-friendly ways of cleaning so you never have to worry about dangerous chemicals that may risk your family's health.</p>

        <p>Most cleaning products on the market contain chemical substances that are harmful for you and your family. Doesn't it make sense to clean your home only with the safest products?</p>

        <p>The housekeepers perform an eco-friendly cleaning that's good for your home and family, themselves, and the Earth. Many clients are switching to environmentally safe, effective cleaners to improve the health of their families. Why put your family's health at risk from chemicals that other conventional cleaners use</p>

        <p>At {{business.name}}, we always keep in mind the health and wellness of your family. We do not only refer cleaners to clean your space, but we also make sure that they do it in the safest way possible. When it comes to green cleaning services, {{business.city}}'s {{business.name}} is the one to call.</p>
      </v-flex>
      <v-flex xs12 md6 text-xs-left text-sm-left order-xs4 order-md3>
        <testimonial></testimonial>
      </v-flex>
      <v-flex xs12 md6 text-xs-left order-xs2 pr-2>
        <v-card-media :src="src" height="500"></v-card-media>
      </v-flex>
      <v-flex xs12 md6 order-xs3 mt-4>
        <contact-form title="Get a Free Quote"></contact-form>
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
      src: '/static/pages/room.webp',
      business: this.$store.getters.business
    }
  }
}
</script>

<style lang="css">
</style>
