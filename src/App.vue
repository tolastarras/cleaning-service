<template>
  <v-app style="background:url(/static/bg.png)">
    <v-navigation-drawer
      temporary
      absolute
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-tile 
          value="true"
          v-for="(item, i) in menuItems"
          :key="i"
        >
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
        <v-layout xs6 col>
          <v-flex xs12></v-flex>
        </v-layout>
        
        <div class="text-xs-center">
          <v-btn outline color="red darken-3">Call us today {{phone}}</v-btn>
        </div>

        <v-layout xs6 col>
          <v-flex xs12>social media</v-flex>
        </v-layout>
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
    <v-content>
      <main>
        <router-view></router-view>
      </main>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        phone: '786-212-3780',
        clipped: false,
        drawer: false,
        fixed: false,
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire'
        }],
        miniVariant: false,
        right: true,
        title: 'Evevides Logo'
      }
    },
    computed: {
      menuItems () {
        return [
          {icon: 'bubble_chart', title: 'Home', link: '/'},
          {icon: 'room', title: 'About Us', link: '/about'},
          {icon: 'person', title: 'Services', link: '/servies'},
          {icon: 'person', title: 'Contact', link: '/contact'}
        ]
      }
    }
  }
</script>

<style lang="css">
body {
  background-image: url('/static/bg.png')
}
.theme--light .toolbar {
  background-color: transparent;
}
.btn--active {
  color: red;
}
.toolbar__items {
  height: 1.8em;
  background-color: none;
}
a {
  border-right: 1.2px solid black;
}
a:last-of-type {
  border-right: none;
}
.btn--active {
  background: red;
}
</style>
