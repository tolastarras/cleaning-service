<template lang="html">
  <v-content>
    <top-navbar
      :logo="logo"
      :scrolled="scrolled "
      :business-name="business.name"
      :menu-items="menuItems"
      @close-drawer="drawer = !drawer"
    />
    <left-navbar
      :show-drawer="drawer"
      :logo="logo"
      :business-name="business.name"
      :menu-items="menuItems"
      @close-drawer="drawer = !drawer"
    />
    <parallax v-if="parallaxData" :data="parallaxData" />
  </v-content>
</template>

<script>
import Parallax from '@/components/Parallax'
import TopNavbar from '@/components/navigation/TopNavbar'
import LeftNavbar from '@/components/navigation/LeftNavbar'

export default {
  name: 'AppHeader',
  components: {
    Parallax,
    TopNavbar,
    LeftNavbar
  },
  props: {
    business: {
      type: Object,
      required: true
    },
    parallax: {
      type: Object,
      required: true
    }
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
    parallaxData () {
      let page = this.$root.getPage(this.$route.path)
      let parallaxData = this.parallax[`${page}`]

      return parallaxData === undefined ? false : {
        ...parallaxData,
        src: this.getCurrentDeviceImage(parallaxData.src)
      }
    }
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 0
    },
    getCurrentDeviceImage (name) {
      const bp = this.$vuetify.breakpoint
      const size = bp.smAndDown ? 'mobile' : (bp.mdAndDown ? 'tablet' : 'new')
      const ext = bp.lgAndUp ? 'webp' : 'jpg'

      return require(`@/assets/header/${name}_${size}.${ext}`)
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
