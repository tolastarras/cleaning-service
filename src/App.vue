<template>
  <v-app>
    <app-header />
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppHeader from '@/components/Navigation'
import AppFooter from '@/components/footer/Index'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
<style lang="scss">
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

.application a {
  color: inherit !important;
}

.container {
  padding: 0 !important;
  margin: 0 auto;
}

.main-content {
  // max-width: 1200px !important;
  margin: 0 auto;
  background: white;
  padding: 6em 2em;
  flex: 1 0 auto;
}

.theme--light .toolbar {
  background-color: transparent;
}

.toolbar__items {
  height: 1.8em;
  background-color: none;
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
    // padding: .8em .3em !important;
  }

  .card__text, .main-content {
    padding: 0 !important;
  }
}

@media (max-width: 1300px) {
  .container {
    max-width: 100% !important;
  }
}
</style>
