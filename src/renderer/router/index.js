import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Add',
      name: 'add-files',
      component: require('@/components/AddZone').default
    },
    {
      path: '/simple',
      name: 'simple-drag',
      component: require('@/components/simpleDrag').default
    },
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
