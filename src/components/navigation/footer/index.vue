<template lang="html">
  <v-container fluid>
    <top-footer
      :business="business"
      :services="services"
      :contact-methods="contactMethods"
    />
    <bottom-footer :business="business" />
  </v-container>
</template>

<script>
import TopFooter from './Top'
import BottomFooter from './Bottom'

export default {
  name: 'AppFooter',
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
      required: true
    }
  },
  components: {
    TopFooter,
    BottomFooter
  }
}
</script>

<style lang="scss">
.v-footer {
  background: $color-10 !important;
  box-sizing: border-box;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .footer-block {
    position: relative;
    line-height: 1.7rem;
    font-size: $font-18;
    max-width: 30% !important;

    > h2 {
      padding: 0.5em 0;
      margin-bottom: 1em;
      border-bottom: 1px solid $color-07;
      width: 100% !important;
    }

    .contact-info-list {
      background: transparent;
      padding: 0;

      .access_time {
        display: none;
      }

      > div {
        height: 2.5rem;

        .v-list__tile {
          font-size: $font-16;
          height: auto;
          text-decoration: none;

          .v-avatar {
            width: 20px !important;
            margin-left: 2px;
          }

          .v-list__tile__avatar {
            min-width: 35px;

            .v-icon {
              width: 20px !important;
            }
          }
        }
      }
    }
  }

  &.bottom-footer {
    font-size: $font-12;
    background: darken($color-10, 4) !important;
  }
}

.service-types {
  width: 50%;
  padding-bottom: 7px;
}

/* media queries */
@media (max-width: 1024px) {
  .v-footer {
    margin-top: 0 !important;
    padding: 2.5rem 1rem 0 !important;
  }

  h2 {
    margin-left: 0;
    width: 100% !important;
  }

  .top-footer > .layout {
    flex-direction: column;

    .footer-block {
      max-width: 100% !important;
      margin-bottom: 1.5rem;
    }
  }

  .bottom-footer > div {
    margin-bottom: 2rem;
  }
}

@media (max-width: 425px) {
  .v-footer {
    padding-top: 1rem !important;
  }
}
</style>
