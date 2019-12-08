<template lang="html">
  <v-container>
    <h1 class="display-1 secondary-title font-weight-bold text-uppercase text-xs-center">{{ title }}</h1>
    <v-layout row wrap>
      <v-flex xs12 class="testimonial" v-for="(testimonial, i) in testimonials" :key="i">
        <div class="testimonial-quote group" :class="lastChild(i)">
          <blockquote>
            <p>{{ testimonial.quote }}</p>
          </blockquote>
          <cite>
            <span>{{ testimonial.client.name }}</span>, {{ testimonial.client.city }}
          </cite>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['title'],
  methods: {
    lastChild (i) {
      return (i + 1) === this.testimonials.length ? 'last' : ''
    }
  },
  computed: mapState(['testimonials'])
}
</script>

<style lang="scss" scoped>
@import '@/styles/components/_testimonials.scss';
</style>
