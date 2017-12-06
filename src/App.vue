<template>
  <v-app>
    <v-container class="container">
      <app-header :menuItems="menuItems" :title="title" :phone="phone"></app-header>
      <v-content>
        <main>
          <router-view></router-view>
        </main>
      </v-content>
      <app-footer :business="title" :phone="phone"></app-footer>
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
        phone: '786-212-3780',
        clipped: false,
        right: true,
        title: 'Evevides Quality Cleaning Services'
      }
    },
    computed: {
      menuItems () {
        return [
          {icon: 'bubble_chart', title: 'Home', link: '/'},
          {icon: 'room', title: 'About Us', link: '/about'},
          {icon: 'person', title: 'Services', link: '/services'},
          {icon: 'person', title: 'Contact', link: '/contact'}
        ]
      }
    }
  }
</script>

<style lang="css">
h1, h2 {
  color: #555
}
.application.theme--light {
  background: url(/static/bg.png) repeat
}
.container {
  max-width: 1200px;
}
.content {
  background: white;
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
