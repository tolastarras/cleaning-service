<template lang="html">
  <v-container>
    <h1 class="display-1 secondary-title font-weight-bold text-uppercase text-xs-center">
      {{ title }}
    </h1>
    <v-layout row wrap>
      <v-flex
        v-for="(testimonial, index) in testimonials"
        :key="index"
        xs12
      >
        <client-testimonial
          :class="{ last: index === testimonials.length - 1 }"
          :testimonial="testimonial"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import ClientTestimonial from './ClientTestimonial'

export default {
  name: 'Testimonials',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  components: {
    ClientTestimonial
  },
  computed: {
    ...mapState(['testimonials'])
  }
}
</script>
