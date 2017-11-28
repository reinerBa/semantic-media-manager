import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/filemanager',
      name: 'Datei Manager',
      component: require('@/components/FileManager').default
    },
    {
      path: '/Settings',
      name: 'Einstellungen',
      component: require('@/components/SettingsPage').default
    },
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
