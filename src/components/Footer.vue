<template lang="html">
  <v-footer :fixed="fixed" class="footer ma-0 pa-0">
    <hr>
    <v-container>
      <v-layout row wrap>
        <v-flex text-xs-center text-sm-left order-xs3 order-sm1 pt-2>
          <span class="caption">&copy; 2017 by {{ business }}</span>
          <v-spacer></v-spacer>
        </v-flex>
        <v-flex text-xs-center text-sm-right order-xs1 order-sm2>
          <span class="headline text--red darken-3">
            <b>Call for a free estimate</b>
            <a :href="phoneLink" class="xs-only d-block">{{ phone }}</a>
          </span>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  props: ['business', 'phone'],
  data () {
    return {
      fixed: false
    }
  },
  computed: {
    phoneLink () {
      return 'tel:' + this.phone
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
</style>
