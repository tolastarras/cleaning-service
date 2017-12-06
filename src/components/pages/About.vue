<template lang="html">
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 text-xs-left text-sm-left pr-2>
        <h1>{{title}}</h1>
        <h2 style="margin-bottom:.8em">Serving the Miami-Dade Kendall Area Since 2016</h2>
        <p>We are a professional team of women specialized in offering general maintenance in what you need. We adapt our cleaning services to meet your needs at the best market price.</p>
        <p>Since we started, we've attracted a loyal clientele based our exceptional customer service. Our customers range from stay-at-home mothers in need of a breather to office dwelling professionals with a little time to spare. With a full range of cleaning services, San Francisco based Sparkling Clean Agency offers clients a chance to sit back and relax with professional cleaners taking over their chores.</p>
        <p>We need to be aware how our actions impact others and the Earth. Even little things can mean a lot. When it comes to cleaning services, San Francisco families can avoid the negative effects of harsh chemicals by choosing green cleaning methods. We assure our clients that the housekeepers referred by our agency provide quality cleaning services while using non-toxic products. Since 2005, our company has an established reputation when it comes to referring reliable and professional domestic workers in San Francisco. The house cleaners we refer opt for environment-friendly ways of cleaning so you never have to worry about dangerous chemicals that may risk your family's health.</p>

        <p>Most cleaning products on the market contain chemical substances that are harmful for you and your family. Doesn't it make sense to clean your home only with the safest products?</p>

        <p>The housekeepers perform an eco-friendly cleaning that's good for your home and family, themselves, and the Earth. Many clients are switching to environmentally safe, effective cleaners to improve the health of their families. Why put your family's health at risk from chemicals that other conventional cleaners use?</p>

        <p>At Sparkling Clean Agency, we always keep in mind the health and wellness of your family. We do not only refer cleaners to clean your space, but we also make sure that they do it in the safest way possible. When it comes to green cleaning services, San Francisco's Sparkling Clean Agency is the one to call.</p>
        <h2>TESTIMONIALS</h2>
      </v-flex>
      <v-flex xs12 sm6 text-xs-left>
        <v-card-media :src="src" height="500"></v-card-media>
        <v-container>
          <h2>Get a free estimate</h2>
          <v-card color="blue lighten-5" flat>
            <v-card-text>
              <v-container fluid>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="input-1-3" label="Name" single-line></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="input-1-3" label="Email" single-line></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="input-1-3" label="Phone" single-line></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="input-1-3" label="Message" multi-line></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      phone: '786-212-3780',
      title: 'Evevides Quality Cleaning Services',
      src: '/static/pages/room.webp'
    }
  },
}
</script>

<style lang="css">
</style>
