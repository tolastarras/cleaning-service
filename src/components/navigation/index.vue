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
            <v-btn outline color="red darken-3">Call us today {{phone}}</v-btn>
          </v-flex>
          <v-flex xs-12 md1 text-xs-center text-md-right>
            <social-media></social-media>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <v-toolbar flat>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn active-class="my-class" flat v-for="item in menuItems" :key="item.title" :to="item.link" exact>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-content>
</template>

<script>
import SocialMedia from '@/components/shared/SocialMedia'
export default {
  props: ['menuItems', 'title', 'phone'],
  components: { SocialMedia },
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style scoped lang="css">
.my-class {
  background: none;
  color: #c62828;
}
.my-class:hover {
  color: blue;
}
a {
  border-right: 2px solid #777;
}
a:last-of-type {
  border-right: none;
}
a.btn:hover {
  background: blue;
  color: #c62828;
}
</style>
