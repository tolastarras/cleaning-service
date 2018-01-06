<template lang="html">
  <v-footer :fixed="false" color="white--text">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6 text-xs-center text-md-left order-xs2 order-md1 pt-2>
          <div class="text-xs-center text-md-left caption">&copy; 2017 {{ business.name }}. <span>All Rights Reserved.</span></div>
          <div class="built-by"><a href="http://www.nuriki.com">Built by Nuriki &reg;</a></div>
          <v-spacer></v-spacer>
        </v-flex>
        <v-flex xs12 md6 text-xs-center text-md-right order-xs1 order-md2>
          <span class="headline">
            <b>Call for a free estimate</b>
            <a :href="phoneLink" class="xs-only d-block">{{ business.phone }}</a>
          </span>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      business: this.$store.getters.business
    }
  },
  computed: {
    phoneLink () {
      return 'tel:' + this.business.phone
    }
  }
}
</script>

<style scoped lang="css">
/* @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed'); */
.caption, .built-by {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 200;
  /* color: #727272; */
}
.caption > span {
  text-transform: uppercase;
}
a {
  text-decoration: none;
  color: #777;
}
a:hover {
  color: #2196f3;
}
.footer {
  padding: 2em !important;
  background-color: #111 !important;
}
.layout {
  max-width: 1200px;
  margin: 0 auto;
}
.headline b {
  text-transform: uppercase;
}
.container {
  margin: 0 auto !important;
  max-width: 1200px;
}
/* media queries */
@media (max-width: 415px) {
  .footer {
    padding: 1em 0 !important;
  }
}
</style>
