<template lang="html">
  <v-content>
    <v-toolbar flat :class="{ standard: !scrolled, sticky: scrolled }" class="white--text">
      <v-layout row wrap>
        <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up white--text"></v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link :to="{ name: 'home' }" tag="button">
            <img :src="logo" :alt="business.name"/>
          </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down">
          <router-link class="menuItem text-uppercase font-weight-bold" v-for="item in menuItems" :key="item.title" :to="item.url" exact>
            {{ item.title }}
          </router-link>
        </v-toolbar-items>
      </v-layout>
    </v-toolbar>

    <v-navigation-drawer dark app temporary v-model="drawer">
      <v-list class="pt-3">
        <v-list-tile avatar tag="div">
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/">
                <img class="drawer" :src="logo" :alt="business.name"/>
              </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.stop="drawer = !drawer">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-divider light></v-divider>
        <v-list-tile class="menu-items" :class="activeItem(item)" v-for="(item, i) in menuItems" :key="i" router :to="item.url">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <parallax v-if="parallaxData" :data="parallaxData"></parallax>
  </v-content>
</template>

<script>
import { mapState } from 'vuex'
import Parallax from './Parallax'

export default {
  components: {
    Parallax
  },
  data () {
    return {
      scrolled: false,
      logo: require('@/assets/logo.svg'),
      path: this.$route.path,
      drawer: false,
      image: null,
      menuItems: [
        { icon: 'people', title: 'About Us', url: '/about' },
        { icon: 'view_list', title: 'Services', url: '/services' },
        { icon: 'perm_phone_msg', title: 'Contact Us', url: '/contact' }
      ]
    }
  },
  computed: {
    ...mapState(['business', 'documentWidth', 'parallax']),
    parallaxData () {
      let page = this.$root.getPage(this.$route.path)
      let parallaxData = this.parallax[`${page}`]

      return parallaxData === undefined ? false : {
        ...parallaxData,
        src: this.$root.getImage(parallaxData.src, this.documentWidth)
      }
    }
  },
  methods: {
    activeItem (item) {
      let page = this.$root.getPage(this.$route.path)
      let currentPage = this.$root.getPage(item.url)

      if (currentPage === page) {
        return 'active'
      }
      return ''
    },
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

<style lang="scss" scoped>
@import '@/styles/components/_navigation.scss';
</style>
