<template>
  <v-app>
    <v-container class="container">
      <v-layout>
        <v-flex xs-12>
          <app-header :menuItems="menuItems"></app-header>
          <v-content>
            <main>
              <router-view></router-view>
            </main>
          </v-content>
          <app-footer></app-footer>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  import AppHeader from '@/components/navigation'
  import AppFooter from '@/components/Footer'
  export default {
    components: {
      AppHeader,
      AppFooter
    },
    data () {
      return {
        clipped: false,
        right: true
      }
    },
    computed: {
      menuItems () {
        return [
          {icon: 'bubble_chart', title: 'Home', url: '/'},
          {icon: 'room', title: 'About Us', url: '/about'},
          {icon: 'person', title: 'Services', url: '/services'},
          {icon: 'person', title: 'Contact', url: '/contact'}
        ]
      }
    }
  }
</script>

<style lang="css">
h1, h2 {
  color: #555
}
.display-1 {
  text-transform: uppercase;
  letter-spacing: -2px;
  font-weight: bold;
}
.application {
  /*font-family: 'courier new', 'sans-serif';*/
}
.application.theme--light {
  background: url(/static/bg.png) repeat
}
.container {
  max-width: 1200px;
}
.content {
  /*background: white;*/
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
.btn--active {
  background: blue;
}
</style>
