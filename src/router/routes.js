const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackPreload: true */ /* webpackChunkName: "home" */ '@/views/Home')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About')
  },
  {
    path: '/services',
    name: 'service',
    component: () => import(/* webpackChunkName: "services" */ '@/views/Services')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '@/views/Contact')
  },
  {
    path: '*',
    redirect: '/'
  }
]

module.exports = routes
