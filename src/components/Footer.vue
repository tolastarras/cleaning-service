<template lang="html">
  <div class="">
    <v-footer :fixed="false" class="top-footer" color="white--text">
      <v-container>
        <v-layout row wrap justify-space-around>
          <v-flex class="contact-info" xs12 md3 justify-center>
            <h1 class="white--text">{{business.email.title}}</h1>
            <div v-text="business.email.text"></div>
          </v-flex>
          <v-flex class="contact-info" xs12 md3>
            <h1 class="white--text">Hours</h1>
            <div v-html="business.hours"></div>
          </v-flex>
          <v-flex class="contact-info" xs12 md3>
            <h1 class="white--text">Location</h1>
            <div v-html="business.address"></div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-footer>
    <v-footer :fixed="false" class="footer ma-0" color="gray darken-5 white--text">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md6 text-xs-center text-md-left order-xs2 order-md1 pt-2>
            <div class="caption">&copy; Copyright 2017 - {{ business.name }}. - All Rights Reserved.</div>
            <div class="built-by"><strong><a href="http://www.nuriki.com">Built by Nuriki Software</a></strong></div>
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
  </div>
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
a {
  text-decoration: none;
  color: #777;
}
a:hover {
  color: #2196f3;
}
.footer2 {
  background-color: red;
}
.footer {
  padding: 2em;
  margin-top: 1em;
  background-color: #111;
}
.top-footer {
  background-color: #222 !important;
}
.headline b {
  letter-spacing: -1px;
  text-transform: uppercase;
}
.logo {
  border-right: 1px solid white;
  margin-right: 1em;
  padding-right:1em;
}
.contact-info {
  padding: 2em;
}
.container {
  margin: 0 auto;
}
.built-by {
  margin-left: 2px;
}
</style>
