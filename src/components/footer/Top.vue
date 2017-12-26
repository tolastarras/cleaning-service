<template lang="html">
  <v-footer :fixed="false" color="white--text">
    <v-container>
      <v-layout row wrap>
        <v-flex class="contact-info" xs12 lg3>
          <h2 class="blue--text">About Us</h2>
          <div v-html="business.about.html"></div>
        </v-flex>
        <v-flex class="contact-info" xs12 md4 lg3>
          <h2 class="blue--text">Contact Us</h2>
          <div v-text="business.email">
            <p>{{ business.email }}</p>
            <p>{{ business.phone }}</p>
            </ul>
          </div>
          <v-icon dark large>fa-question</v-icon>
          <div v-text="business.phone"></div>
        </v-flex>
        <v-flex class="contact-info" xs12 md4 lg3>
          <h2 class="blue--text">Location</h2>
          <div v-html="business.address"></div>
          <v-icon dark large>fa-map-marker</v-icon>
        </v-flex>
        <v-flex class="contact-info" xs12 md4 lg3>
          <h2 class="blue--text">Hours</h2>
          <div v-html="business.hours"></div>
          <v-icon dark large>fa-clock-o</v-icon>
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
  padding: .4em 0;
  border-bottom: 1px solid grey;
  margin-bottom: 1em;
  color: gold !important;
}
a:hover {
  color: gold;
}
.footer {
  padding: 2em 0;
  background-color: #222 !important;
}
.contact-info {
  padding: 1em;
  position: relative;
  /* padding-bottom: 0; */
}
.contact-text {
  padding-top: 1.2em;
}
.container {
  margin: 0 auto !important;
  max-width: 1200px;
}
.icon {
  position: absolute;
  top: 2.2em;
  right: .6em;
}
</style>
