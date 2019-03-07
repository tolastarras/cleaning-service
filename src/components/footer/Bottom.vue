<template lang="html">
  <v-footer class="white--text py-4" :fixed="false" height="auto">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6 text-xs-center text-md-left order-xs2 order-md1 pt-4>
          <div class="text-xs-center text-md-left caption">&copy; 2017 {{ business.name }}. <span>All Rights Reserved.</span></div>
          <div class="built-by"><a href="http://www.tolastarras.com">Built by Tolastarras &reg;</a></div>
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
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['business']),
    phoneLink () {
      return 'tel:' + this.business.phone
    }
  }
}
</script>

<style lang="css" scoped>
/* @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed'); */

.caption, .built-by {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 200;
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

footer {
  background-color: #111 !important;
}

.layout {
  /* max-width: 1200px; */
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
