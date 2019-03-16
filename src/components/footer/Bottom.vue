<template lang="html">
  <v-footer class="white--text py-4 bottom-footer" :fixed="false" height="auto">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6 text-xs-center text-md-left order-xs2 order-md1 pt-4>
          <div class="text-xs-center text-md-left caption">
            &copy; 2017 {{ business.name }}. <span>All Rights Reserved.</span>
            <div>
              <a target="_blank" href="http://www.tolastarras.com">Built by Tolastarras &reg;</a>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 md6 text-xs-center text-md-right order-xs1 order-md2>
          <span class="headline">
            <b>Call for a free estimate</b>
            <a :href="business.phone.link" class="xs-only d-block">{{ business.phone.title }}</a>
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
