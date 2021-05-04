<template lang="html">
  <v-footer
    class="white--text py-4"
    :fixed="false"
    height="auto"
  >
    <v-container>
      <v-layout row wrap>
        <v-flex
          xs12
          md6
          text-xs-center
          text-md-left
          order-xs2
          order-md1
          pt-4
        >
          <div class="text-xs-center text-md-left font-weight-light white--text">
            &copy; 2017 {{ business.name }}. <span>All Rights Reserved.</span>
            <div>
              <a target="_blank" href="http://www.tolastarras.com">
                Built by Tolastarras &reg;
              </a>
            </div>
          </div>
        </v-flex>
        <v-flex
          xs12
          md6
          text-xs-center
          text-md-right
          order-xs1
          order-md2
        >
          <span class="headline">
            <b class="text-uppercase">Call for a free estimate</b>
            <a :href="business.phone.link" class="xs-only d-block">
              {{ business.phone.title }}
            </a>
          </span>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'BottomFooter',
  props: {
    business: {
      type: Object,
      required: true
    }
  },
  computed: {
    phoneLink () {
      return 'tel:' + this.business.phone
    }
  }
}
</script>

<style lang="scss" scoped>
.v-footer {
  box-sizing: border-box;
  font-size: $font-12;
  background: darken($color-10, 4);

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
