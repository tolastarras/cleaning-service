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
    <v-toolbar flat v-bind:class="{standard: !scrolled, sticky: scrolled}" class="white--text">
      <v-layout row wrap style="max-width:1200px;margin: 0 auto">
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up white--text" style="border: 1px solid white; border-radius: 4px;"></v-toolbar-side-icon>
        <v-toolbar-title><img :src="logo" :alt="business.name"/></v-toolbar-title>
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
import Parallax from '@/components/shared/Parallax'
export default {
  props: ['menuItems', 'name'],
  components: {
    Parallax
  },
  data () {
    return {
      scrolled: false,
      logo: require('@/assets/logo.svg'),
      path: this.$route.path,
      business: this.$store.getters.business,
      drawer: false,
      documentWidth: this.$store.getters.documentWidth,
      image: null
    }
  },
  computed: {
    parallaxData () {
      let width = this.$store.getters.documentWidth
      let page = this.$route.path.replace(/\//g, '')
      let parallaxData = this.$store.getters.parallax[`${page}`]
      // console.log('here.....', parallaxData.title)
      return {
        ...parallaxData,
        src: this.getImage(parallaxData.src, width)
      }
    }
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 0
    },
    handleResize () {
      this.documentWidth = this.$store.getters.documentWidth
    }
  },
  watch: {
    documentWidth () {
      console.log('store', this.$store.getters.documentWidth)
      return this.$store.getters.documentWidth
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
  color: #ccc !important;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  vertical-align: middle;
  display: inline-block;
  font-weight: bold;
  padding: 0 1.5em;
  border-right: 1px solid white;
}
.menuItem:hover {
  color: white !important;
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
  background-color: #111;
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
  color: white !important;
}
.router-link-exact-active:hover {
  cursor: default;
}
a:last-of-type {
  border-right: none;
}
</style>
