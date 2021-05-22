<template lang="html">
  <v-container class="about my-4">
    <v-layout row wrap>
      <v-flex xs12>
        <v-card flat class="mb-3">
          <v-card-text class="pb-3">
            <h1 class="text-xs-left display-2 primary-title font-weight-bold">
              Serving your area
            </h1>
            <v-img
              :lazy-src="srcLazy"
              :src="srcImage"
              width="460"
              :alt="business.name"
              class="pl-5 girl mb-2"
            />
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
        <v-layout
          class="testimonials-layout"
          :class="`mt-${this.$vuetify.breakpoint.mdAndUp ? 4 : 0}`"
          row
          wrap
        >
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

export default {
  name: 'About',
  updated () {
    const SMALL_DEVICE_WIDTH = 425
    if (this.documentWidth < SMALL_DEVICE_WIDTH) {
      const element = document.querySelector('.insert-image')
      const image = document.querySelector('.girl')

      element.style.display = 'block'
      element.setAttribute('src', this.src)
      element.setAttribute('alt', this.business.name)

      image.style.display = 'none'
    }
  },
  components: {
    ContactForm: () => import('@/components/shared/ContactForm'),
    Testimonials: () => import('@/components/Testimonials')
  },
  computed: {
    ...mapState(['business', 'documentWidth']),
    srcLazy () {
      return require('@/assets/about_thumb.jpg')
    },
    srcImage () {
      return require('@/assets/about.webp')
    },
    content () {
      const blob = this.business.about.blob

      return blob.replace(/##\w+-\w+##/gi, match => {
        const [tag, type] = match.replaceAll('#', '').split('-')
        return this[tag][type]
      })
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

  .girl {
    float: right;

    /deep/ .v-responsive__content {
      background: none !important;
    }
  }
}

@media (max-width: 1024px) {
  .testimonials-layout > div {
    margin-left: 0;
    padding: 2.5rem 0;
  }
}

@media (max-width: 734px) {
  .girl {
    width: 100% !important;
    margin-bottom: 1rem;
    padding-top: 10px;
  }
}
</style>
