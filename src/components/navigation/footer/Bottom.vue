<template lang="html">
  <v-card dark flat class="white--text py-4" height="auto">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6 text-xs-center text-md-left order-xs2 order-md1 pt-4>
          <div class="text-xs-center text-md-left font-weight-light white--text">
            &copy; 2017-{{ currentYear }} {{ business.name }}. <span>All rights reserved.</span>
            <div class="caption mt-1">Serving {{ business.serving }} and surrounding areas since {{ business.since }}
            </div>
            <div class="caption-1">
              <a target="_blank" href="http://www.tolastarras.com">
                Built by Tolastarras &reg;
              </a>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 md6 text-xs-center text-md-right order-xs1 order-md2>
          <span class="headline">
            <b class="text-uppercase">Call for a free estimate</b>
            <a :href="business.phone.link" class="xs-only d-block">
              {{ business.phone.title }}
            </a>
          </span>

          <!-- <div class="social-icons-wrapper mt-2">
            <v-btn
              v-for="(item, key) in socialLinks"
              :key="key"
              icon
              dark
              small
              class="social-icon-btn"
              :href="item.url"
              target="_blank"
            >
              <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
          </div> -->
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'BottomFooter',
  data () {
    return {
      currentYear: new Date().getFullYear(),
      socialLinks: {
        facebook: {
          icon: 'facebook',
          url: 'https://facebook.com/evevides'
        },
        twitter: {
          icon: 'chat',
          url: 'https://twitter.com/evevides'
        },
        instagram: {
          icon: 'photo_camera',
          url: 'https://instagram.com/evevides'
        }
      }
    }
  },
  props: {
    business: {
      type: Object,
      required: true
    }
  },
  computed: {
    phoneLink () {
      return `tel: ${this.business.phone}`
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  box-sizing: border-box;
  font-size: $font-12;
  background: darken($color-10, 4) !important;

  a {
    text-decoration: none;
  }
}

.social-icons-wrapper {
  display: inline-flex;
  gap: 0.15rem;

  .social-icon-btn {
    margin: 0 !important;
    padding: 0 !important;
    min-width: 32px;
    width: 32px;
    height: 32px;

    .v-icon {
      font-size: 1.2rem;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      transform: scale(1.1);
      transition: all 0.2s ease;
    }
  }
}

// Mobile responsive adjustment
@media (max-width: 600px) {
  .social-icons-wrapper {
    margin-top: 0.5rem;
    justify-content: center;
    width: 100%;
  }
}
</style>
