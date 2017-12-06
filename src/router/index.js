import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/home'
import About from '@/components/pages/About'
import Service from '@/components/pages/Service'
import Contact from '@/components/pages/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/services',
      name: 'Service',
      component: Service
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  mode: 'history'
})
