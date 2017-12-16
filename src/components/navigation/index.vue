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
    <!-- <div class="toolbar_extension">
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
    </div> -->
    <v-toolbar flat v-bind:class="{standard: !scrolled, sticky: scrolled}" class="white--text">
      <v-layout row wrap style="max-width:1200px;margin: 0 auto">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up white--text" style="border: 1px solid white; border-radius: 4px;"></v-toolbar-side-icon>
        <v-toolbar-title><img src="/static/logo.svg" :alt="business.name"/></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <router-link class="menuItem" v-for="item in menuItems" :key="item.title" :to="item.url" exact>
            {{item.title}}
          </router-link>
        </v-toolbar-items>
      </v-layout>
    </v-toolbar>
    <parallax v-if="parallaxData" :data="parallaxData"></parallax>
  </v-content>
</template>

<script>
import SocialMedia from '@/components/shared/SocialMedia'
import Parallax from '@/components/shared/Parallax'
export default {
  props: ['menuItems', 'name'],
  components: { SocialMedia, Parallax },
  data () {
    return {
      scrolled: false,
      path: this.$route.path,
      business: this.$store.getters.business,
      drawer: false
    }
  },
  computed: {
    parallaxData () {
      let items = {
        'about': {
          title: 'About Page',
          subtitle: 'ABOUT PAGE SUBTITLE',
          src: '/static/header/living_room.jpg'
        },
        'services': {
          title: 'Services Page',
          subtitle: 'SERVICES PAGE SUBTITLE',
          src: '/static/header/living2.jpg'
        },
        'contact': {
          title: 'We want to hear from you!',
          subtitle: 'GIVE US A CALL, EMAIL US OR USE OUR MESSAGE FORM',
          src: '/static/header/office.jpg'
        }
      }

      let page = this.$route.path.replace('/', '')
      return items[`${page}`]
    }
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 0
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="css">
img {
  height: 64px;
  position: absolute;
  top: .8em;
}
.menuItem {
  color: lightgray;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  vertical-align: middle;
  display: inline-block;
  font-weight: bold;
  padding: 0 1.5em;
}
.menuItem:hover {
  color: white;
}
.toolbar.standard {
  background-color: rgba(0, 0 , 0, 0.2);
  position: absolute;
  z-index: 2;
  height: 7em;
  padding-top: 1.2em;
}
.toolbar.sticky {
  position: fixed;
  background-color: black;
  z-index: 2;
  height: 4.5em;
}
.toolbar.sticky img {
  top: .6em;
  height: 40px;
}
.toolbar.standard a.menuItem {
  font-size: 1.2em;
}
.toolbar.sticky a.menuItem {
  font-size: 1em;
}
.router-link-exact-active {
  color: white;
}
.router-link-exact-active:hover {
  cursor: default;
}
a {
  border-right: 1px solid white;
}
a:last-of-type {
  border-right: none;
}
</style>
