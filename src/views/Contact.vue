<template lang="html">
  <v-container class="contact my-4">
    <v-layout row wrap>
      <h1 class="text-xs-left display-2 primary-title font-weight-bold">
        Contact Us
      </h1>
      <v-flex xs12 lg5>
        <v-layout row wrap>
          <v-flex xs12>
            <v-list class="contact-info-list">
              <v-list-tile
                v-for="(contact, index) in contactMethods"
                :key="index"
                target="_blank"
                :href="contact.link"
              >
                <v-list-tile-avatar>
                  <v-icon>{{ contact.icon }}</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title
                    :class="contact.icon"
                    v-html="contact.title"
                  />
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 lg7 class="message-form">
        <v-layout row wrap>
          <v-flex text-xs-center>
            <v-card flat light>
              <v-card-text>
                <contact-form />
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    ContactForm: () => import('@/components/shared/ContactForm')
  },
  data () {
    return {
      src: require('@/assets/contact.jpg')
    }
  },
  computed: mapGetters(['contactMethods'])
}
</script>

<style lang="scss" scoped>
.contact-info-list {
  color: $color-04;
  padding-top: 0;
  background: none;

  > div:hover {
    background: $color-02;
  }

  .v-icon {
    vertical-align: top;
    border: 2px solid $color-04;
    color: $color-04;
    border-radius: 5px;
    padding: 8px;
    width: 3.3rem !important;
  }

  .v-list__tile__content {
    overflow: visible;

    .v-list__tile__title {
      height: auto;
      white-space: normal;
      line-height: 1.5rem;
      font-size: $font-24;
      overflow: visible;

      &.access_time {
        line-height: 2.2rem;
        margin-top: 4rem;
      }
    }
  }
}

.message-form {
  margin-top: -9rem;
}

@media (max-width: 1024px) {
  .contact-info {
    margin-bottom: 3rem;
  }

  .message-form {
    margin: 6rem 0 2rem 0;
  }
}

@media only screen and (max-width: 425px) {
  .v-list__tile__title  {
    font-size: $font-20 !important;
  }
}
</style>
