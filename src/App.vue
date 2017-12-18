<template>
  <v-app>
    <app-header :menuItems="menuItems"></app-header>
    <v-container style="max-width: 1200px;">
      <v-layout>
        <v-flex xs-12>
          <v-content class="pa-2">
            <router-view></router-view>
          </v-content>
        </v-flex>
      </v-layout>
    </v-container>
    <app-footer></app-footer>
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
          {icon: 'person', title: 'Contact Us', url: '/contact'}
        ]
      }
    }
  }
</script>

<style lang="css">
h1, h2 {
  color: #555;
  padding-bottom: .5em;
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
.main-content {
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
.parallax__image {
  transform: translate(-50%, 50px) !important;
}
.parallax__content {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
