import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/home'
import About from '@/components/pages/about'
import Service from '@/components/pages/service'
import Contact from '@/components/pages/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about/',
      name: 'About',
      component: About
    },
    {
      path: '/services/',
      name: 'Service',
      component: Service
    },
    {
      path: '/contact/',
      name: 'Contact',
      component: Contact
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  }
})
