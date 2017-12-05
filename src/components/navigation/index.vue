<template lang="html">
  <div class="">
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
      <v-content>
        <div class="text-xs-center">
          <v-btn outline color="red darken-3">Call us today {{phone}}</v-btn>
        </div>
      </v-content>
    </div>
    <v-toolbar flat>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" color="primary">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: ['menuItems', 'title', 'phone'],
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style lang="css">
</style>
