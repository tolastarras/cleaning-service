import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/home'

Vue.use(Router)

export default new Router({
  base: process.env.NODE_ENV === 'production' ? '/projects/cleaning-service' : '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/components/pages/about')
    },
    {
      path: '/services',
      name: 'Service',
      component: () => import('@/components/pages/service')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/components/pages/contact')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
