import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/home'
import About from '@/components/pages/about'
import Service from '@/components/pages/service'
import Contact from '@/components/pages/contact'

import { PROJECT_PATH } from '@/config/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: `${PROJECT_PATH}/`,
      name: 'Home',
      component: Home
    },
    {
      path: `${PROJECT_PATH}/about/`,
      name: 'About',
      component: About
    },
    {
      path: `${PROJECT_PATH}/services/`,
      name: 'Service',
      component: Service
    },
    {
      path: `${PROJECT_PATH}/contact/`,
      name: 'Contact',
      component: Contact
    },
    {
      path: '*',
      redirect: `${PROJECT_PATH}/`
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

// router.replace({ path: `*', redirect: '/projects/evevides/' })
