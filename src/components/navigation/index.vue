<template lang="html">
  <v-content>
    <v-navigation-drawer temporary absolute v-model="drawer" app>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in menuItems" :key="i">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- <div class="toolbar_extension">
      <v-container>
        <v-layout row>
          <v-flex xs-12 md-6 text-xs-center text-md-center>
            <v-btn outline color="red darken-3">Call us today {{ business.phone }}</v-btn>
          </v-flex>
          <v-flex xs-12 md1 text-xs-center text-md-right>
            <social-media></social-media>
          </v-flex>
        </v-layout>
      </v-container>
    </div> -->
    <v-toolbar flat class="sticky white--text" style="padding: 1em 0">
      <v-layout row wrap style="max-width:1200px;margin: 0 auto">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up white--text" style="border: 1px solid white; border-radius: 4px;"></v-toolbar-side-icon>
        <v-toolbar-title v-text="business.name"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <router-link class="menuItem" v-for="item in menuItems" :key="item.title" :to="item.url" exact>
            {{item.title}}
          </router-link>
        </v-toolbar-items>
      </v-layout>
    </v-toolbar>
    <v-parallax src="/static/carousel/kitchen.jpg" style="margin-top:6em;">
    <v-layout column align-center justify-center>
      <h1 class="white--text">Vuetify.js</h1>
      <h4 class="white--text">Build your application today!</h4>
    </v-layout>
  </v-parallax>
  </v-content>
</template>

<script>
import SocialMedia from '@/components/shared/SocialMedia'
export default {
  props: ['menuItems', 'name'],
  components: { SocialMedia },
  data () {
    return {
      path: this.$route.path,
      business: this.$store.getters.business,
      drawer: false
    }
  }
}
</script>

<style scoped lang="css">
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}
.toolbar {
  background: black;
}
.toolbar__content {
  color: white;
  max-width: 1200px;
  padding: 4em 0;
}
.menuItem {
  color: white;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  vertical-align: middle;
  height: 2em;
  line-height: 2em;
  font-weight: bold;
  padding: 0 1.5em;
}
.menuItem:hover {
  color: gray;
}
.router-link-exact-active {
  color: gray;
}
a {
  border-right: 1px solid white;
}
a:last-of-type {
  border-right: none;
}
</style>
