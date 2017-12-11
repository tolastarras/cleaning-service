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
    <div class="toolbar_extension">
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
    </div>
    <v-toolbar flat>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title v-text="business.name"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <router-link class="menuItem" v-for="item in menuItems" :key="item.title" :to="item.url" exact>
          {{item.title}}
        </router-link>
      </v-toolbar-items>
    </v-toolbar>
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
.menuItem {
  color: #555;
  width: 7em;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  vertical-align: middle;
  height: 2em;
  line-height: 2em;
  font-weight: bold;
}
.menuItem:hover {
  color: #c62828;
}
.router-link-exact-active {
  color: #c62828;
}
a {
  border-right: 2px solid #777;
}
a:last-of-type {
  border-right: none;
}
</style>
