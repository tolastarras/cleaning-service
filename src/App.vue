<template>
  <div class="wrapper">
    <v-app>
      <app-header :menuItems="menuItems"></app-header>
      <v-container>
        <v-layout>
          <v-flex xs-12>
            <v-content class="main-content">
              <router-view></router-view>
            </v-content>
          </v-flex>
        </v-layout>
        <app-footer></app-footer>
      </v-container>
    </v-app>
  </div>
</template>

<script>
  import AppHeader from '@/components/navigation'
  import AppFooter from '@/components/footer'
  import { PROJECT_PATH } from '@/config/'
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
          { icon: 'home', title: 'Home', url: `${PROJECT_PATH}/` },
          { icon: 'people', title: 'About Us', url: `${PROJECT_PATH}/about/` },
          { icon: 'fa-tasks', title: 'Services', url: `${PROJECT_PATH}/services/` },
          { icon: 'phone_in_talk', title: 'Contact Us', url: `${PROJECT_PATH}/contact/` }
        ]
      }
    }
  }
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css?family=Roboto:100');
h1, h2 {
  color: #333;
  padding-bottom: .5em;
  text-transform: uppercase;
}
#app {
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  background: white;
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.display-1 {
  text-transform: uppercase;
  letter-spacing: -2px;
  font-weight: bold;
}
.display-2 {
  text-transform: uppercase;
  font-weight: bold;
  color: #333;
}
.bottom-line:after {
  content: "";
  display: block;
  width: 45px;
  height: 4px;
  background-color: #333;
  margin-top: .4em;
  margin-bottom: .5em;
}
.application a {
  color: inherit !important;
}
.container {
  padding: 0 !important;
  margin: 0 auto;
}
.main-content {
  max-width: 1200px !important;
  margin: 0 auto;
  background: white;
  padding: 2em;
  flex: 1 0 auto;
}
.theme--light .toolbar {
  background-color: transparent;
}
.toolbar__items {
  height: 1.8em;
  background-color: none;
}
.btn--active {
  background: blue;
}
.parallax {
  width: 100% !important;
}
.parallax__image {
  transform: translate(-50%, 50px) !important;
}
.parallax__content {
  background-color: rgba(0, 0, 0, 0.5);
}
.card__text {
  padding: 0;
}
/* media queries */
@media only screen and (max-width: 599px) {
  h1.display-2 {
    font-size: 2.2em !important;
  }
  h1.display-1 {
    font-size: 2em !important;
  }
  .container {
    padding: .8em .3em !important;
  }
  .card__text, .main-content {
    padding: 0 !important;
  }
}
@media (max-width: 1019px) {
  .container {
    max-width: 100% !important;
  }
}
</style>
