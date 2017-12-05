<template>
  <v-app style="background:url(/static/bg.png)">
    <v-container style="max-width:1000px;">
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
