<template lang="html">
  <v-footer :fixed="false" color="white--text">
    <v-container>
      <v-layout row wrap>
        <v-flex class="contact-info" xs12 lg3>
          <h2 class="blue--text">About Evevides</h2>
          <div v-text="business.about.text"></div>
        </v-flex>
        <v-flex class="contact-info" xs12 md4 lg3>
          <h2 class="blue--text">Contact</h2>
          <div v-text="business.email"></div>
          <div v-text="business.phone"></div>
        </v-flex>
        <v-flex class="contact-info" xs12 md4 lg3>
          <h2 class="blue--text">Location</h2>
          <div v-html="business.address"></div>
        </v-flex>
        <v-flex class="contact-info" xs12 md4 lg3>
          <h2 class="blue--text">Hours</h2>
          <div v-html="business.hours"></div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  props: ['business']
}
</script>

<style scoped lang="css">
h2 {
  text-transform: uppercase;
}
.footer {
  padding: 2em;
  background-color: #222 !important;
}
.contact-info {
  padding: 1em 3em;
  /* padding-bottom: 0; */
}
.container {
  margin: 0 auto;
  max-width: 1200px;
}
</style>
