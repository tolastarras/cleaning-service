<template lang="html">
  <v-container class="about my-4">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card flat class="mb-3">
          <v-card-text class="pb-3">
            <h1 class="text-xs-left display-2 primary-title font-weight-bold">
              Serving your area
            </h1>
            <img :src="src" :alt="business.name" align="right" class="pl-5 girl-js"/>
            <div v-html="content" />
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 lg6>
        <v-layout row wrap>
          <v-flex order-xs3 text-xs-center>
            <v-card flat light>
              <contact-form :quote="true" />
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 lg6>
        <v-layout class="testimonials-layout" row wrap>
          <v-flex order-xs4 xs12 offset-xs1>
            <v-card flat>
              <testimonials title="Clients comments!" />
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
import Testimonials from '@/components/Testimonials'

export default {
  data () {
    return {
      src: require('@/assets/about.png')
    }
  },
  mounted () {
    const SMALL_DEVICE_WIDTH = 425
    if (this.documentWidth < SMALL_DEVICE_WIDTH) {
      const element = document.querySelector('.insert-image')
      const image = document.querySelector('.girl-js')

      element.style.display = 'block'
      element.setAttribute('src', this.src)
      element.setAttribute('alt', this.business.name)

      image.style.display = 'none'
    }
  },
  components: {
    ContactForm,
    Testimonials
  },
  computed: {
    ...mapState(['business', 'documentWidth']),
    content () {
      return `
        <p>Since we started, we've attracted a loyal clientele based our exceptional customer service. Our customers range from stay-at-home mothers in need of a breather to office dwelling professionals with a little time to spare. With a full range of cleaning services, ${this.business.city} based ${this.business.name} offers clients a chance to sit back and relax with professional cleaners taking over their chores.</p>
        <p>We need to be aware how our actions impact others and the Earth. Even little things can mean a lot. When it comes to cleaning services, ${this.business.city} families can avoid the negative effects of harsh chemicals by choosing green cleaning methods. We assure our clients that the housekeepers referred by our agency provide quality cleaning services while using non-toxic products.</p>
        <img class="insert-image" style="display: none; width: 100%; padding: 0 3.2rem; margin-bottom: 2rem; margin-top: -0.5rem;">
        <p>The house cleaners we refer opt for environment-friendly ways of cleaning so you never have to worry about dangerous chemicals that may risk your family's health.</p>
        <p>Most cleaning products on the market contain chemical substances that are harmful for you and your family. Doesn't it make sense to clean your home only with the safest products?</p>
        <p>The housekeepers perform an eco-friendly cleaning that's good for your home and family, themselves, and the Earth. Many clients are switching to environmentally safe, effective cleaners to improve the health of their families. Why put your family's health at risk from chemicals that other conventional cleaners use.</p>
        <p>At ${this.business.name}, we always keep in mind the health and wellness of your family. We do not only refer cleaners to clean your space, but we also make sure that they do it in the safest way possible. When it comes to green cleaning services, ${this.business.city}'s ${this.business.name} is the one to call.</p>        
      `
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  background: none;

  .v-card__text {
    text-align: justify;
  }
}

img {
  width: 30rem !important;
}

@media (max-width: 1024px) {
  .testimonials-layout > div {
    margin-left: 0;
    padding: 2.5rem 0;
  }

  img {
    margin-left: 0;
    width: 100%;
    margin-bottom: 1rem;
  }
}

@media (max-width: 425px) {
  img {
    max-width: 100%;
    padding-right: 4rem;

    .girl-css {
      width: 100%;
      border: 4px solid blue;
    }
  }
}
</style>
