import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About')
    },
    {
      path: '/services',
      name: 'service',
      component: () => import('@/views/Services')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/Contact')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
