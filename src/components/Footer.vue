<template lang="html">
  <div class="">
    <v-footer :fixed="false" color="blue darken-3 white--text">
      <v-container>
        <v-layout row wrap justify-space-around>
          <v-flex class="contact-info" xs12 md4 justify-center>
            <h1 class="title white--text">Email</h1>
            <div v-text="business.email"></div>
          </v-flex>
          <v-flex class="contact-info" xs12 md4>
            <h1 class="title white--text">Hours</h1>
            <div v-html="business.hours"></div>
          </v-flex>
          <v-flex class="contact-info" xs12 md4>
            <h1 class="title white--text">Location</h1>
            <div v-html="business.address"></div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-footer>
    <v-footer :fixed="false" class="footer" color="ma-0 blue darken-4 white--text">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 md6 text-xs-center text-md-left order-xs2 order-md1 pt-2>
            <span class="caption">&copy; 2017 by {{ business.name }}. All Rights Reserved.</span>
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
  text-decoration: underline;
}
.footer {
  padding: 2em;
  margin-top: 1em;
  background: none;
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
</style>
