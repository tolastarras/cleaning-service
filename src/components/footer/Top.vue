<template lang="html">
  <v-footer :fixed="false" color="white--text">
    <v-container>
      <v-layout row wrap>
        <v-flex class="contact-info" xs12 md4>
          <h2 class="blue--text">About Us</h2>
          <div v-html="business.about.html"></div>
        </v-flex>
        <v-flex class="contact-info contact-us" xs12 md4 d-block>
          <h2 class="blue--text">Contact Us</h2>
          <div class="phone">
            {{ business.phone }}
            <v-icon class="icon-phone" dark large>fa-phone</v-icon>
          </div>
          <div class="email">
            {{ business.email }}
            <v-icon class="icon-email" dark large>fa-envelope-o</v-icon>
          </div>
          <div class="address" v-html="business.address">
            <v-icon class="icon-address" dark large>fa-map-marker</v-icon>
          </div>
          <div class="">
            <v-icon class="icon-question" dark large>fa-question</v-icon>
          </div>
        </v-flex>
        <v-flex class="contact-info" xs12 md4>
          <h2 class="blue--text">Hours</h2>
          <div v-html="business.hours"></div>
          <v-icon class="icon-clock" dark large>fa-clock-o</v-icon>
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
  padding: 2em !important;
  background-color: #222 !important;
  box-sizing: border-box;
}
.contact-info {
  position: relative;
  line-height: 1.6em;
  font-size: 1.1em;
  font-family: 'Roboto', sans-serif;
  font-weight: lighter;
  padding-right: 2em;
}
.contact-info:last-child {
  padding-left: 2em;
  padding-right: 0;
}
.contact-us {
  padding-right: 1em;
  padding-left: 1em;
}
.icon-phone, .icon-address, .icon-email, .icon-question, .icon-clock {
  display: none;
}
.phone:hover, .email:hover, .address:hover {
  /* cursor: pointer; */
  /* background: #111; */
}
.phone:hover .icon-phone, .email:hover .icon-email, .address:hover .icon-address {
  /* display: inline; */
}
.contact-info:last-child {
  margin-right: 0;
}
.container {
  margin: 0 auto !important;
  max-width: 1200px;
}
.icon {
  position: absolute;
  top: 2em;
  right: .6em;
}
/* media queries */
@media (max-width: 959px) {
  .contact-info {
    margin: 0;
    padding: 0;
  }
  .contact-info:last-child {
    padding-left: 0;
  }
  .contact-us {
    padding: 1.6em 0;
  }
}
</style>
