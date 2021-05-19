<template lang="html">
  <v-card
    dark
    flat
    height="auto"
    class="py-4 transparent white--text"
  >
    <v-container class="top-footer">
      <v-layout justify-space-between row>
        <v-flex
          v-show="!isAboutPage"
          class="footer-block font-weight-thin"
          xs12
        >
          <h2 class="amber--text text--accent-2">About Us</h2>
          <div v-text="business.about.text" />
          <router-link to="about">(read more ...)</router-link>
        </v-flex>
        <v-flex
          v-show="!isServicesPage && !isHomePage"
          class="footer-block font-weight-thin"
          xs12
          sm4
        >
          <h2 class="amber--text text--accent-2">What we do</h2>
          <div v-text="business.service.text" />
          <router-link to="services">(read more ...)</router-link>
        </v-flex>
        <v-flex
          v-show="!isServicesPage && !isHomePage"
          class="footer-block font-weight-thin"
          xs12
          lg4
        >
          <h2 class="amber--text text--accent-2">Our Services</h2>
          <v-layout row wrap>
            <v-flex
              v-for="service in services"
              :key="service.id"
              text-uppercase
              class="service-types pb-2"
              xs-6
            >
              <router-link to="services">{{ service.title }}</router-link>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex
          v-show="!isContactPage && !isAboutPage"
          class="footer-block font-weight-thin"
          xs12
          lg4
        >
          <h2 class="amber--text text--accent-2">Contact Us</h2>
          <v-list class="contact-info-list">
            <v-list-tile
              v-for="(contact, i) in contactMethods"
              :key="i"
              :class="contact.icon"
              target="_blank"
              :href="contact.link"
            >
              <v-list-tile-avatar>
                <v-icon left>{{ contact.icon }}</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="contact.title" />
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
        <v-flex
          v-show="!isContactPage"
          class="footer-block font-weight-thin"
          xs12
          lg4
        >
          <h2 class="amber--text text--accent-2">Hours</h2>
          <div v-html="business.hours.title" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'TopFooter',
  props: {
    business: {
      type: Object,
      required: true
    },
    services: {
      type: Array,
      required: true
    },
    contactMethods: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    // hide contact info when in contact page
    isContactPage () {
      return this.$route.path === '/contact'
    },
    isAboutPage () {
      return this.$route.path === '/about'
    },
    isServicesPage () {
      return this.$route.path === '/services'
    },
    isHomePage () {
      return this.$route.path === '/'
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  box-sizing: border-box;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .footer-block {
    font-size: $font-18;
    max-width: 30%;

    > h2 {
      padding: 0.5em 0;
      margin-bottom: 1em;
      border-bottom: 1px solid $color-07;
    }

    .contact-info-list {
      background: transparent;
      padding: 0;

      > div {
        height: 2.5rem;

        .v-list__tile__avatar {
          min-width: 32px;
          width: 38px;
        }
      }
    }

    .service-types {
      width: 50%;
    }
  }
}

@media screen and (max-width: 1024px) {
  .top-footer > .layout {
    flex-direction: column;

    .footer-block {
      max-width: 100%;
      margin-bottom: 1.5rem;
    }
  }
}
</style>
